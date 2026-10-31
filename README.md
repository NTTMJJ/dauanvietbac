# Dấu ấn Việt Bắc — Cuốn sổ thương nhớ

Mở `index.html` trong trình duyệt hoặc dùng Live Server của VS Code. Giữ nguyên các thư mục `images`, `fonts`, `video` cạnh ba tệp chính.

## Chỉnh nội dung và ảnh

- `script.js`: sửa lời mở đầu, nội dung chương, thư cuối và `closingVideoUrl`.
- `style.css`: sửa màu tại `:root`, bố cục và hiệu ứng.
- `images/`: thay ảnh theo tên hiện có hoặc chép ảnh mới vào đây.

Mỗi trang sách hiển thị một ảnh bên cạnh phần nội dung. Trong `script.js`, mỗi chương có `pageImages` theo thứ tự trang; trang tràn nội dung dùng ảnh kế tiếp, không ghép ảnh. Nếu nội dung dài hơn số ảnh đã gán, trang mới dùng minh họa SVG chưa dùng trong chương để tránh lặp ảnh tư liệu.

Ảnh hiện được sắp theo chủ đề: `anh0.jpg` và `anh01.jpg` cho lời mở đầu; `anh1.jpg` và `anh2.jpg` cho chương những người làm nên Việt Bắc; `anh3.jpg` cho những ngày đầu tiên; `anh4.jpg` cho lớp học; `anh5.jpg` và `anh6.jpg` cho sân chơi; `anh7.jpg` cho điều chúng ta tự hào.

Video cần được chép vào `video/` và khai báo đường dẫn trong `closingVideoUrl`. Trang tĩnh không tự tải video lên máy chủ; đường dẫn video trên máy cá nhân chỉ dùng được trên máy đó.
