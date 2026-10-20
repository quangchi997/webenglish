# Website Clone: 12 Ngày Chinh Phục Mọi Mục Tiêu Điểm Số (TOEIC)

Dự án bản sao 100% giao diện, hiệu ứng và tính năng của trang `https://www.toeic12ngay.online/`.

---

## 1. Cấu trúc thư mục

```
toeic12ngay-clone/
├── index.html        # File HTML chính (toàn bộ giao diện, hình ảnh, CSS, JS)
├── config.js         # File cấu hình (Hotline, Zalo, Fanpage, Webhook)
├── server.js         # Web server Node.js nội bộ (tuỳ chọn)
├── package.json      # File thông tin dự án npm
├── start.bat         # File click mở web nhanh trên Windows
└── README.md         # Hướng dẫn sử dụng
```

---

## 2. Cách mở và sử dụng ngay

- **Cách 1 (Nhanh nhất):** Nhấp đúp chuột vào file `start.bat` hoặc nhấp đúp trực tiếp vào `index.html` để mở ngay trên trình duyệt Chrome/Edge.
- **Cách 2 (Chạy server nội bộ Node.js):**
  ```bash
  npm start
  ```
  Sau đó mở trình duyệt truy cập: `http://localhost:3000`

---

## 3. Tùy chỉnh thông tin website

Mở file `config.js` để thay đổi các thông tin nhanh chóng mà không cần sửa file HTML:
- `hotline`: Số điện thoại gọi khi người dùng bấm vào các nút gọi.
- `zalo`: Link Zalo cá nhân hoặc OA của bạn.
- `facebook`: Link fanpage.
- `webhookUrl`: Link webhook Google Sheets hoặc Telegram để tự động nhận thông báo khi có người đăng ký.

---

## 4. Dữ liệu học viên đăng ký tư vấn

- Khi khách hàng điền form nhận tư vấn ở đầu trang hoặc chân trang, hệ thống sẽ:
  1. Tự động lưu thông tin vào bộ nhớ trình duyệt (`localStorage.getItem('toeic_leads')`).
  2. Hiển thị popup **"ĐĂNG KÝ THÀNH CÔNG"**.
  3. Nếu bạn điền `webhookUrl` trong `config.js`, dữ liệu sẽ được bắn trực tiếp về Google Sheets hoặc CRM của bạn ngay lập tức.

---

## 5. Hướng dẫn đưa lên Internet (Deploy) miễn phí

Bạn có thể tải thư mục này lên các nền tảng hosting miễn phí như:
- **Netlify:** Kéo thả cả thư mục `toeic12ngay-clone` vào [app.netlify.com/drop](https://app.netlify.com/drop) là có ngay link web online trong 10 giây.
- **Vercel:** Dùng lệnh `vercel` hoặc liên kết GitHub.
- **GitHub Pages:** Đẩy lên repo GitHub và bật tính năng Pages.
