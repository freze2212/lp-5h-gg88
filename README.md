# Source Code Landing Page gg88xx.vip

Trọn bộ source code landing page **gg88xx.vip** đã được tải xuống và cấu trúc lại sạch sẻ, tối ưu SEO, mượt mà và hoạt động độc lập (offline & online).

## 📁 Cấu trúc thư mục

```
gg88xx.vip/
├── index.html           # Trang landing page chính (HTML5 chuẩn, SEO)
├── css/
│   └── style.css        # Giao diện responsive, hiệu ứng hover, video background & glowing images
├── js/
│   ├── script.js        # Xử lý tự động bắt tên miền, bảo mật anti-inspect/contextmenu
│   ├── dev.js           # Xử lý hàm chuyển hướng linh hoạt (checklinkvn, checklinkbr, checklinkph,...)
│   ├── jquery.min.js    # Thư viện jQuery phụ trợ
│   └── disable-devtool.js # Chống F12 / DevTools
├── assets/              # Toàn bộ hình ảnh, logo, gif banner & mp4 video background
│   ├── ok1.mp4           # Video nền MP4
│   ├── logo.png         # Logo chính GG88
│   ├── singapore.webp   # Quốc kỳ / nút Singapore
│   ├── dubai.webp       # Quốc kỳ / nút Dubai
│   ├── brazil.gif       # Quốc kỳ / nút Brazil
│   ├── turkey.gif       # Quốc kỳ / nút Thổ Nhĩ Kỳ
│   ├── bannerlive.gif   # Banner Live
│   └── favicon.ico      # Icon trang web
└── README.md
```

## ⚙️ Hướng dẫn cấu hình Link Đăng Ký theo Tên Miền (Domain Mapping)

File cấu hình chính nằm tại **[js/dev.js](file:///c:/Landingpage/landingpage-5h-gg/js/dev.js)**. 

Khi bạn trỏ nhiều tên miền về Cloudflare (CF) hoặc bất kỳ hosting nào, trang web sẽ tự động nhận diện tên miền mà khách hàng đang truy cập và điều hướng đến link tương ứng:

```javascript
// Bảng cấu hình Tên Miền -> Đường Link Đích trong file js/dev.js
var DOMAIN_CONFIG = {
    "gg88xx.vip": "https://www.gg8842.com/?id=852213853",
    "gg88king.top": "https://gg8830.com/?id=467371408",
    "gg88tong.cc": "https://gg8845.com/?id=343325246"
};

// Link mặc định dự phòng nếu tên miền chưa có trong bảng trên
var DEFAULT_TARGET_URL = "https://www.gg8842.com/?id=852213853";
```

Muốn thêm tên miền mới, bạn chỉ cần mở file [js/dev.js](file:///c:/Landingpage/landingpage-5h-gg/js/dev.js) và thêm dòng tương ứng vào `DOMAIN_CONFIG`.


## 🚀 Hướng dẫn chạy thử

Bạn có thể mở trực tiếp file `index.html` trên trình duyệt hoặc chạy bằng bất kỳ HTTP web server nào (Nginx, Apache, Node.js live-server, Vercel, Netlify).
