const trustedCompaniesData = [
    { id: 1, name: 'Euroflex', logoUrl: 'assets/euroflex.png' },
    { id: 2, name: 'Euroflex', logoUrl: 'assets/euroflex.png' },
    { id: 3, name: 'Euroflex', logoUrl: 'assets/euroflex.png' },
    { id: 4, name: 'Euroflex', logoUrl: 'assets/euroflex.png' },
    { id: 5, name: 'Euroflex', logoUrl: 'assets/euroflex.png' }
];

function renderTrustedByLogos() {
    const container = document.getElementById('trusted-logos-container');
    if (!container) return;

    let logosHTML = '';
    
    trustedCompaniesData.forEach(company => {
        logosHTML += `
            <div class="flex-shrink-0 cursor-pointer opacity-85 hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <img src="${company.logoUrl}" alt="${company.name} Logo" class="h-12 md:h-16 w-auto object-contain mix-blend-multiply">
            </div>
        `;
    });

    container.innerHTML = logosHTML;
}

document.addEventListener('DOMContentLoaded', renderTrustedByLogos);
