const testimonialsData = [
    {
        title: "Revolutionized our FIBC production efficiency!",
        content: "Meera Industries' TFO machines have revolutionized our FIBC production efficiency. The precision engineering delivers the consistent yarn strength critical for our bulk container applications.",
        name: "Johann Mueller",
        role: "Production Director"
    },
    {
        title: "Excellent support for specialized applications.",
        content: "The durability and performance of Meera's fishnet processing equipment has significantly improved our marine product quality. Excellent support for specialized applications.",
        name: "Carlos Mendoza",
        role: "Operations Manager"
    },
    {
        title: "Excellent support for specialized applications.",
        content: "The durability and performance of Meera's fishnet processing equipment has significantly improved our marine product quality. Excellent support for specialized applications.",
        name: "Carlos Mendoza",
        role: "Operations Manager"
    },
    {
        title: "Provides the exact specifications we need!",
        content: "For our technical textile applications, Meera's specialized machinery provides the exact specifications we need. Their understanding of automotive textile requirements is exceptional.",
        name: "Rajesh Kumar",
        role: "Manufacturing Head"
    }
];

const portfolioData = [
    {
        title: "HDPE Fittings & Accessories",
        description: "Complete range of electrofusion and butt fusion fittings, including elbows, tees, reducers, and couplers for seamless pipe connections.",
        image: "assets/image.png",
        link: "#"
    },
    {
        title: "Professional Installation Services",
        description: "Expert installation and fusion welding services ensuring optimal system performance, compliance with standards, and long-term reliability.",
        image: "assets/image.png",
        link: "#"
    },
    {
        title: "PE-RT Heating Pipes",
        description: "Polyethylene of Raised Temperature resistance pipes ideal for underfloor heating, radiator connections, and hot water applications.",
        image: "assets/image.png",
        link: "#"
    }
];

function renderTestimonials() {
    const container = document.getElementById('testimonials-container');
    if (!container) return;

    let html = '';
    testimonialsData.forEach(item => {
        html += `
            <div class="bg-[#F8F9FA] rounded-[16px] md:rounded-[20px] p-6 md:p-8 lg:p-10 border border-gray-100 flex flex-col min-w-[300px] w-full md:w-[380px] lg:w-[420px] snap-center shrink-0 shadow-[0_2px_10px_rgba(0,0,0,0.015)]">
                <svg class="w-[26px] h-[26px] text-[#2D3A8C] mb-5 md:mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <h3 class="text-[17px] md:text-[18px] font-bold text-gray-900 mb-3 tracking-tight leading-snug">${item.title}</h3>
                <p class="text-gray-500 text-[13.5px] md:text-[14px] leading-relaxed mb-8 flex-grow pr-2">
                    ${item.content}
                </p>
                <div class="flex items-center gap-3 mt-auto">
                    <div class="w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#E2E8F0] shrink-0"></div>
                    <div class="flex flex-col">
                        <span class="text-[13.5px] md:text-[14px] font-bold text-gray-900 tracking-tight">${item.name}</span>
                        <span class="text-[11.5px] text-gray-500">${item.role}</span>
                    </div>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function renderPortfolio() {
    const container = document.getElementById('portfolio-container');
    if (!container) return;

    let html = '';
    portfolioData.forEach(item => {
        html += `
            <div class="bg-white rounded-[16px] md:rounded-[20px] p-5 md:p-6 border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col h-full hover:border-gray-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 group">
                <h3 class="text-[18px] md:text-[19px] font-bold text-gray-900 mb-2 md:mb-3 tracking-tight leading-snug">${item.title}</h3>
                <p class="text-gray-500 text-[13.5px] md:text-[14px] leading-relaxed mb-6 flex-grow pr-1">
                    ${item.description}
                </p>
                <div class="w-full h-[180px] sm:h-[190px] md:h-[200px] rounded-[10px] md:rounded-[12px] overflow-hidden mb-5 md:mb-6 shrink-0 relative mask">
                    <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-[1.03]">
                </div>
                <a href="${item.link}" class="w-full py-3 md:py-3.5 rounded-[8px] bg-[#F4F5F7] hover:bg-[#E2E8F0] text-[#2D3A8C] text-[13.5px] font-semibold text-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#2D3A8C]/30 active:scale-[0.98]">
                    Learn More
                </a>
            </div>
        `;
    });
    container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
    renderTestimonials();
    renderPortfolio();
});
