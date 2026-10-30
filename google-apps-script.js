/**
 * =========================================================================================
 * RICHFEEL TRICHOLOGY CENTRE VADODARA - GOOGLE APPS SCRIPT WEB APP
 * =========================================================================================
 * This script connects both the Popup Modal Form and Contact Page Form to a Google Sheet.
 * Submissions are saved to the Google Sheet with an IST timestamp, patient contact details,
 * treatment selected, preferred slot, notes, and the origin form source.
 *
 * -----------------------------------------------------------------------------------------
 * QUICK SETUP INSTRUCTIONS:
 * -----------------------------------------------------------------------------------------
 * 1. Open your Google Drive (drive.google.com) and create a new Google Sheet named:
 *    "Richfeel Vadodara - Patient Leads"
 *
 * 2. In the top menu, click on:
 *    Extensions  ->  Apps Script
 *
 * 3. Delete any default code in Code.gs and PASTE THIS ENTIRE FILE into the editor.
 *
 * 4. Click the Save icon (Ctrl + S or Cmd + S).
 *
 * 5. Click the blue "Deploy" button at the top right, then select:
 *    "New deployment"
 *
 * 6. Configure the deployment:
 *    - Click the Gear icon next to "Select type" -> choose "Web app"
 *    - Description: "Richfeel Vadodara Leads Web App v1"
 *    - Execute as: "Me (your-email@gmail.com)"
 *    - Who has access: "Anyone"  <-- CRITICAL: Choose "Anyone" so the website can submit leads
 *
 * 7. Click "Deploy". Grant permissions if prompted by Google (click Advanced -> Go to Untitled project).
 *
 * 8. Copy the generated "Web app URL" (it ends in /exec, e.g. https://script.google.com/macros/s/AKfycb.../exec).
 *
 * 9. Paste this URL in your project:
 *    - Option A: In `.env.local`:
 *      NEXT_PUBLIC_GOOGLE_SHEET_SCRIPT_URL=https://script.google.com/macros/s/YOUR_URL/exec
 *    - Option B: In `src/data/staticData.ts`:
 *      googleSheetScriptUrl: 'https://script.google.com/macros/s/YOUR_URL/exec'
 * =========================================================================================
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  // Wait up to 30 seconds for concurrent submissions
  lock.tryLock(30000);

  try {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = doc.getActiveSheet();

    // 1. Ensure header row exists on first run
    if (sheet.getLastRow() === 0) {
      var headers = [
        "Timestamp (IST)",
        "Full Name",
        "Phone Number",
        "Email Address",
        "Treatment / Concern",
        "Preferred Date",
        "Time Slot",
        "Condition Notes / Query",
        "Form Source",
        "Status"
      ];
      sheet.appendRow(headers);

      // Apply professional formatting to headers
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground("#101e3d");
      headerRange.setFontColor("#ffffff");
      headerRange.setFontWeight("bold");
      headerRange.setFontSize(10);
      headerRange.setHorizontalAlignment("center");
      headerRange.setVerticalAlignment("middle");
      sheet.setRowHeight(1, 35);
      sheet.setFrozenRows(1);
    }

    // 2. Parse incoming JSON or form parameters
    var data = {};
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (parseErr) {
        data = e.parameter || {};
      }
    } else if (e.parameter) {
      data = e.parameter;
    }

    // Format IST Timestamp (Indian Standard Time: UTC+5:30)
    var timestamp = Utilities.formatDate(new Date(), "Asia/Kolkata", "yyyy-MM-dd HH:mm:ss");
    var name = (data.name || "").toString().trim() || "N/A";
    var phone = (data.phone || "").toString().trim() || "N/A";
    var email = (data.email || "").toString().trim() || "Not Provided";
    var treatment = (data.treatment || data.concern || "").toString().trim() || "General Consultation";
    var preferredDate = (data.preferredDate || "").toString().trim() || "Earliest Available";
    var timeSlot = (data.timeSlot || "").toString().trim() || "Flexible";
    var message = (data.message || "").toString().trim() || "None";
    var source = (data.source || "").toString().trim() || "Website Form";
    var status = "New Inquiry";

    // 3. Append the record to sheet
    // Prefix phone with single quote to preserve + and leading zeroes in Excel/Sheets
    sheet.appendRow([
      timestamp,
      name,
      "'" + phone,
      email,
      treatment,
      preferredDate,
      timeSlot,
      message,
      source,
      status
    ]);

    var lastRow = sheet.getLastRow();

    // Style data row with alternating subtle tint
    var rowRange = sheet.getRange(lastRow, 1, 1, 10);
    rowRange.setVerticalAlignment("middle");
    rowRange.setFontSize(9);
    if (lastRow % 2 === 0) {
      rowRange.setBackground("#f8fafc");
    }

    // Auto-fit columns if under 30 rows
    if (lastRow <= 30) {
      for (var col = 1; col <= 10; col++) {
        sheet.autoResizeColumn(col);
      }
    }

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success", row: lastRow }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput("Richfeel Vadodara Google Sheets Lead Web App is active and running successfully.")
    .setMimeType(ContentService.MimeType.TEXT);
}

/**
 * OPTIONAL ONE-CLICK SETUP FUNCTION:
 * If you want to create and style the headers right now before receiving the first submission:
 * 1. Select 'setupSheet' in the Apps Script top toolbar dropdown.
 * 2. Click the 'Run' button.
 */
function setupSheet() {
  var doc = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = doc.getActiveSheet();

  var headers = [
    "Timestamp (IST)",
    "Full Name",
    "Phone Number",
    "Email Address",
    "Treatment / Concern",
    "Preferred Date",
    "Time Slot",
    "Condition Notes / Query",
    "Form Source",
    "Status"
  ];

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
  } else {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  }

  var headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setBackground("#101e3d");
  headerRange.setFontColor("#ffffff");
  headerRange.setFontWeight("bold");
  headerRange.setFontSize(10);
  headerRange.setHorizontalAlignment("center");
  headerRange.setVerticalAlignment("middle");
  sheet.setRowHeight(1, 35);
  sheet.setFrozenRows(1);

  for (var col = 1; col <= headers.length; col++) {
    sheet.autoResizeColumn(col);
  }

  Logger.log("Headers created and styled successfully!");
}


