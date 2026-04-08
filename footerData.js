const resourcesData = [
    {
        title: "HDPE Pipe Installation Manual (PDF)",
        link: "#"
    },
    {
        title: "Maintenance & Inspection Handbook (PDF)",
        link: "#"
    },
    {
        title: "Engineering Specifications Sheet (PDF)",
        link: "#"
    }
];

const footerData = {
    categories: [
        { label: "Packaging Industry Solutions", link: "#" },
        { label: "Fishnet Manufacturing", link: "#" },
        { label: "PPMF/Tapes and Twines", link: "#" },
        { label: "FIBC and Woven Sack", link: "#" },
        { label: "Carpet and Rugs Industry", link: "#" },
        { label: "Technical Textiles", link: "#" }
    ],
    products: [
        { label: "Two For One Twister", link: "#" },
        { label: "TPRS Twister Machine", link: "#" },
        { label: "Ring Twisting Machines", link: "#" },
        { label: "Covering Machines", link: "#" },
        { label: "Heat Setting Equipment", link: "#" },
        { label: "Servo Controlled Winders", link: "#" }
    ]
};

function renderResources() {
    const container = document.getElementById('resources-list-container');
    if (!container) return;

    let html = '';
    resourcesData.forEach((item, index) => {
        const isLast = index === resourcesData.length - 1;
        html += `
            <div class="flex flex-col sm:flex-row sm:items-center justify-between py-4 md:py-5 ${!isLast ? 'border-b border-gray-100' : ''}">
                <span class="text-gray-800 text-[13.5px] md:text-[14px] font-medium mb-3 sm:mb-0 pr-4">${item.title}</span>
                <a href="${item.link}" class="inline-flex items-center gap-2 text-brandBlue text-[12.5px] md:text-[13px] font-semibold hover:text-[#1E296B] transition-colors whitespace-nowrap">
                    Download PDF
                    <svg class="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                </a>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function renderFooterLinks() {
    const categoriesContainer = document.getElementById('footer-categories-list');
    const productsContainer = document.getElementById('footer-products-list');

    if (categoriesContainer) {
        let catHtml = '';
        footerData.categories.forEach(item => {
            catHtml += `<li><a href="${item.link}" class="text-gray-500 hover:text-brandBlue text-[13px] transition-colors leading-relaxed block py-1">${item.label}</a></li>`;
        });
        categoriesContainer.innerHTML = catHtml;
    }

    if (productsContainer) {
        let prodHtml = '';
        footerData.products.forEach(item => {
            prodHtml += `<li><a href="${item.link}" class="text-gray-500 hover:text-brandBlue text-[13px] transition-colors leading-relaxed block py-1">${item.label}</a></li>`;
        });
        productsContainer.innerHTML = prodHtml;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderResources();
    renderFooterLinks();
});
