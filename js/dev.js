/**
 * Domain-based Link Redirection Configuration
 * Cấu hình tự động chuyển hướng link theo tên miền (Domain Mapping)
 */

(function () {
    // Bảng cấu hình Tên Miền -> Đường Link Đích
    var DOMAIN_CONFIG = {
        "gg88xx.vip": "https://www.gg8842.com/?id=852213853",
        "gg88king.top": "https://gg8830.com/?id=467371408",
        "gg88tong.cc": "https://gg8845.com/?id=343325246",
        "g8kjc.vip": "https://gg8858.com/?id=243795674",
    };

    // Link mặc định dự phòng nếu tên miền truy cập chưa có trong danh sách trên
    var DEFAULT_TARGET_URL = "https://www.gg8842.com/?id=852213853";

    var customTargetUrl = "";

    // Hàm cho phép ghi đè link đích thủ công nếu cần
    window.setTargetUrl = function (url) {
        customTargetUrl = url;
    };

    // Hàm lấy link đích chính xác dựa trên domain đang chạy
    window.getTargetUrl = function () {
        if (customTargetUrl) return customTargetUrl;

        var host = (window.location.hostname || "").toLowerCase().trim();
        var cleanHost = host.replace(/^www\./, "");

        // 1. Khớp domain hiện tại (ví dụ: gg88xx.vip hoặc www.gg88xx.vip)
        if (DOMAIN_CONFIG[host]) {
            return DOMAIN_CONFIG[host];
        }
        if (DOMAIN_CONFIG[cleanHost]) {
            return DOMAIN_CONFIG[cleanHost];
        }

        // 2. Dự phòng mặc định nếu không khớp
        return DEFAULT_TARGET_URL;
    };

    window.checklinkvn = function () {
        window.location.href = window.getTargetUrl();
    };

    window.checklinkbr = function () {
        window.location.href = window.getTargetUrl();
    };

    window.checklinkph = function () {
        window.location.href = window.getTargetUrl();
    };

    window.checklinkabc = function () {
        window.location.href = window.getTargetUrl();
    };
})();
