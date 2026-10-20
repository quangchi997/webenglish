/**
 * =====================================================================
 * MÃ GOOGLE APPS SCRIPT ĐỂ TỰ ĐỘNG LƯU KHÁCH ĐĂNG KÝ VÀO GOOGLE SHEETS
 * =====================================================================
 * Hướng dẫn 3 bước:
 * 1. Mở file Google Sheets của bạn.
 * 2. Vào menu: Tiện ích mở rộng (Extensions) -> Apps Script.
 * 3. Xoá hết mã cũ, dán toàn bộ đoạn mã bên dưới vào rồi bấm "Lưu" (Ctrl + S).
 * 4. Bấm nút "Triển khai" (Deploy) -> "Tùy chọn triển khai mới" (New deployment).
 *    - Loại: "Ứng dụng web" (Web app).
 *    - Mô tả: Form Toeic
 *    - Thực thi dưới dạng: "Tôi" (Me)
 *    - Người có quyền truy cập: "Bất kỳ ai" (Anyone) -> Rất quan trọng!
 *    - Bấm "Triển khai" (Deploy) -> Cấp quyền (Authorize access) -> Sao chép URL Web App.
 * 5. Dán URL nhận được vào dòng webhookUrl trong file config.js!
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Tự động tạo hàng tiêu đề nếu bảng còn trống
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Thời gian",
        "Họ và Tên",
        "Số điện thoại",
        "SĐT dự phòng",
        "Email",
        "Mục tiêu điểm",
        "Vị trí form"
      ]);
      // Định dạng dòng tiêu đề in đậm
      sheet.getRange(1, 1, 1, 7).setFontWeight("bold");
    }

    var data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    // Thêm ký tự ' trước số điện thoại để Google Sheet không làm mất số 0 ở đầu
    var phone = data.phone ? "'" + data.phone : "";
    var phone2 = data.phone2 ? "'" + data.phone2 : "";

    sheet.appendRow([
      data.time || new Date().toLocaleString("vi-VN"),
      data.name || "",
      phone,
      phone2,
      data.email || "",
      data.target || "",
      data.formId || ""
    ]);

    return ContentService.createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ result: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
