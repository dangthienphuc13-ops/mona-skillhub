// Bước 1: Định nghĩa dữ liệu
const product = {
    name: "The Mona",
    description: "Sản phẩm công nghệ hiện đại, kết hợp giữa hiệu suất cao và thiết kế tinh tế.",
    price: "Giá bán: 5.000.000 VNĐ",
    features: [
        "Thiết kế mỏng, nhẹ, sang trọng.",
        "Hiệu suất mạnh mẽ, xử lý mượt mà mọi tác vụ.",
        "Thời lượng pin ấn tượng, sử dụng cả ngày dài.",
        "Hệ thống bảo mật tối tân."
    ]
};

const salesAdvice = {
    hoai_nghi: {
        title: "Kịch bản bán hàng cho Khách hàng hoài nghi",
        advice: `
* **Chiến lược:** Tập trung vào các dữ liệu, thông số kỹ thuật và bằng chứng thực tế.
* **Cách tiếp cận:**
    1.  **Dùng số liệu:** Đưa ra các con số cụ thể về hiệu suất, thời lượng pin, và các giải thưởng sản phẩm đã đạt được.
    2.  **Đưa ra bằng chứng:** Cho phép khách hàng tự trải nghiệm sản phẩm hoặc xem các video đánh giá từ chuyên gia, người dùng uy tín.
    3.  **Tạo sự tin cậy:** Đảm bảo với khách hàng về chính sách bảo hành, đổi trả rõ ràng và dịch vụ hỗ trợ sau bán hàng.
        VD: "Với chip xử lý mới nhất, The Mona có thể chạy mượt mà các ứng dụng đồ họa nặng. Sản phẩm đã đạt giải thưởng 'Thiết bị của năm 2023'."
        `
    },
    quan_tam_gia: {
        title: "Kịch bản bán hàng cho Khách hàng quan tâm giá",
        advice: `
* **Chiến lược:** Nhấn mạnh vào giá trị sản phẩm mang lại, so sánh với các sản phẩm cùng phân khúc.
* **Cách tiếp cận:**
    1.  **Phân tích lợi ích/chi phí:** Giải thích tại sao mức giá này lại hợp lý với những tính năng và chất lượng vượt trội của The Mona.
    2.  **So sánh khéo léo:** So sánh The Mona với các sản phẩm rẻ hơn nhưng chất lượng kém hơn hoặc thiếu tính năng quan trọng.
    3.  **Đưa ra ưu đãi:** Gợi ý các chương trình khuyến mãi, trả góp, hoặc tặng kèm phụ kiện để tăng giá trị cho khách hàng.
        VD: "Dù giá thành không thấp, nhưng The Mona lại có thời gian sử dụng lâu dài và hiệu suất ổn định, giúp anh/chị tiết kiệm chi phí sửa chữa về sau. Ngoài ra, hôm nay có chương trình tặng kèm sạc nhanh và ốp lưng cao cấp."
        `
    },
    chua_biet: {
        title: "Kịch bản bán hàng cho Khách hàng chưa biết gì",
        advice: `
* **Chiến lược:** Giới thiệu sản phẩm một cách đơn giản, tập trung vào những lợi ích thực tế và dễ hình dung.
* **Cách tiếp cận:**
    1.  **Bắt đầu từ nhu cầu:** Hỏi khách hàng về công việc, sở thích của họ để hiểu họ cần gì.
    2.  **Đơn giản hóa:** Tránh dùng các thuật ngữ chuyên ngành phức tạp. Dùng ngôn ngữ đời thường để giải thích các tính năng.
    3.  **Tạo hứng thú:** Kể một câu chuyện về cách sản phẩm có thể làm cuộc sống của họ tốt hơn.
        VD: "Chào anh/chị, The Mona sẽ là một người bạn đồng hành tuyệt vời. Với nó, anh/chị có thể làm việc hiệu quả, xem phim giải trí và lướt web cực nhanh, không lo gián đoạn."
        `
    }
};

// Bước 2: Hiển thị thông tin sản phẩm khi trang web tải
document.addEventListener('DOMContentLoaded', () => {
    const productDetailsDiv = document.getElementById('product-details');

    // Tạo các phần tử HTML để hiển thị thông tin sản phẩm
    const productName = document.createElement('h3');
    productName.textContent = product.name;
    productDetailsDiv.appendChild(productName);

    const productDesc = document.createElement('p');
    productDesc.textContent = product.description;
    productDetailsDiv.appendChild(productDesc);

    const productPrice = document.createElement('p');
    productPrice.innerHTML = `<strong>${product.price}</strong>`;
    productDetailsDiv.appendChild(productPrice);

    const featuresTitle = document.createElement('p');
    featuresTitle.innerHTML = `<strong>Các tính năng nổi bật:</strong>`;
    productDetailsDiv.appendChild(featuresTitle);

    const featuresList = document.createElement('ul');
    product.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });
    productDetailsDiv.appendChild(featuresList);

    // Bước 3: Lắng nghe sự kiện click nút
    const getAdviceButton = document.getElementById('get-advice-button');
    const customerTypeSelect = document.getElementById('customer-type-select');
    const adviceOutputDiv = document.getElementById('advice-output');

    getAdviceButton.addEventListener('click', () => {
        const selectedType = customerTypeSelect.value;
        
        if (selectedType === 'none') {
            adviceOutputDiv.textContent = 'Vui lòng chọn một loại khách hàng để nhận lời khuyên.';
            return;
        }

        const adviceData = salesAdvice[selectedType];
        if (adviceData) {
            adviceOutputDiv.innerHTML = `
                <h3>${adviceData.title}</h3>
                <p>${adviceData.advice}</p>
            `;
        } else {
            adviceOutputDiv.textContent = 'Không tìm thấy lời khuyên cho loại khách hàng này.';
        }
    });
});