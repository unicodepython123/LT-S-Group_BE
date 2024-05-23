// MÔ HÌNH MVC

// Mô hình MVC là một tiêu chuẩn thiết kế, hiệu quả trong việc phát triển phần mềm
// Gồm 3 thành phần chính:
// 1. View: Chỉ chứa HTML, CSS
// 2. Model: thành phần tương tác với cơ sở dữ liệu để lấy ra dữ liệu
// 3. Controller: 

// Luồng hoạt động
// 1. Gửi request từ client sáng server (HTTP protocol)
// 2. Được đưa qua routes
// 3. Gọi sang 1 Controller
// --> Tương tác lấy dữ liệu ở database lưu ở controller
// --> Gọi sang view, truyền data để lấy view tương ứng
// --> View trả về giao diện haonf chỉnh
// 4. Trả về cho server
// 5. Server trả về cho client