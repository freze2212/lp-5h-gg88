/**
 * Domain-based Link Redirection Configuration
 * Cấu hình tự động chuyển hướng link theo tên miền (Domain Mapping)
 */

(function () {
    // Bảng cấu hình Tên Miền dự phòng
    var DOMAIN_CONFIG = {
  "www.g8qt.org": {
    register: "https://www.gg8844.com/home/register?id=737065258",
  },
  "g8qt.org": {
    register: "https://www.gg8844.com/home/register?id=737065258",
  },
  "www.ctong8.com": {
    register: "https://gg8835.com/home/register?id=246252697",
  },
  "ctong8.com": {
    register: "https://gg8835.com/home/register?id=246252697",
  },
  "www.gg88or.com": {
    register: "https://gg8845.com/?id=554135455",
  },
  "gg88or.com": {
    register: "https://gg8845.com/?id=554135455",
  },
  "www.gg88phi.net": {
    register: "https://www.gg8853.com/?id=753376566",
  },
  "gg88phi.net": {
    register: "https://www.gg8853.com/?id=753376566",
  },
  "www.gg88ss.com": {
    register: "https://www.gg8858.com/?id=812773605",
  },
  "gg88ss.com": {
    register: "https://www.gg8858.com/?id=812773605",
  },
        "gg88xx.vip": "https://gg8824.com/?id=722825946",
        "gg88king.top": "https://gg8830.com/?id=467371408",
        "gg88tong.cc": "https://gg8845.com/?id=343325246",
        "g8kjc.vip": "https://gg8858.com/?id=243795674",
        "gg88en.com": "https://www.gg8853.com/?id=506521461",
        "gg88ue.com": "https://www.gg8854.com/?id=354838403",
    };

    var liveDomains = {};

    // Tự động tải file domains.json từ server
    fetch('domains.json?v=' + Date.now())
        .then(function(res) {
            if (res.ok) return res.json();
            throw new Error('Network response not ok');
        })
        .then(function(data) {
            if (data && typeof data === 'object') {
                liveDomains = data.domains || data;
            }
        })
        .catch(function(err) {
            console.log('Không thể tải domains.json, dùng fallback');
        });

    // Link mặc định dự phòng
    var DEFAULT_TARGET_URL = "https://www.gg8853.com/?id=506521461";
    var customTargetUrl = "";

    window.setTargetUrl = function (url) {
        customTargetUrl = url;
    };

    function extractUrl(val) {
        if (!val) return "";
        if (typeof val === "string") return val;
        if (typeof val === "object") return val.main_url || val.url || val.messenger_url || "";
        return "";
    }

    // Hàm lấy link đích chính xác dựa trên domain đang chạy
    window.getTargetUrl = function () {
        if (customTargetUrl) return customTargetUrl;

        var host = (window.location.hostname || "").toLowerCase().trim();
        var cleanHost = host.replace(/^www\./, "");

        // 1. Kiểm tra trong liveDomains (từ domains.json)
        if (liveDomains[host]) {
            var u = extractUrl(liveDomains[host]);
            if (u) return u;
        }
        if (liveDomains[cleanHost]) {
            var u = extractUrl(liveDomains[cleanHost]);
            if (u) return u;
        }

        // Tìm case-insensitive trong liveDomains
        for (var k in liveDomains) {
            if (k.toLowerCase().replace(/^www\./, "") === cleanHost) {
                var u = extractUrl(liveDomains[k]);
                if (u) return u;
            }
        }

        // 2. Kiểm tra trong fallback DOMAIN_CONFIG
        if (DOMAIN_CONFIG[host]) return extractUrl(DOMAIN_CONFIG[host]);
        if (DOMAIN_CONFIG[cleanHost]) return extractUrl(DOMAIN_CONFIG[cleanHost]);

        for (var k in DOMAIN_CONFIG) {
            if (k.toLowerCase().replace(/^www\./, "") === cleanHost) {
                return extractUrl(DOMAIN_CONFIG[k]);
            }
        }

        // 3. Dự phòng mặc định
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

// Dynamic real-time sync (No fallback)
(function(){try{fetch('/domains.json').then(function(r){return r.json();}).then(function(d){if(!d)return;var h=(window.location.hostname||'').toLowerCase();var nh=h.replace(/^www\./,'');var e=d[h]||d[nh];if(e){var u=e.main_url||e.url||e.link||(typeof e==='string'?e:'');if(u){window.REDIRECT_URL=u;var l=document.querySelectorAll('a.redirect-link,a.btn-register,a.cta-btn');for(var i=0;i<l.length;i++){l[i].href=u;}}}}).catch(function(){});}catch(e){}})();
