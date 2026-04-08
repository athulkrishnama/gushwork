const faqData = [
    {
        question: "What is the purpose of a laser cutter for sheet metal?",
        answer: "It is designed to cut various types of sheet metal with precision, allowing for intricate designs and shapes that are essential in manufacturing processes."
    },
    {
        question: "What are the benefits of using aluminum tubing in manufacturing?",
        answer: "Aluminum tubing is lightweight, highly durable, and offers excellent corrosion resistance, making it ideal for a variety of structural and fluid transport applications."
    },
    {
        question: "How is aluminum tubing produced?",
        answer: "It is typically produced through an extrusion process where heated aluminum billets are forced through a die to create the desired hollow tube shape."
    },
    {
        question: "What are the common applications of aluminum tubing?",
        answer: "Common applications include aerospace components, automotive parts, scaffolding, HVAC systems, and architectural installations."
    },
    {
        question: "Can aluminum tubing be customized?",
        answer: "Yes, aluminum tubing can be fully customized in terms of length, diameter, wall thickness, and specialized coatings to meet specific project requirements."
    }
];

function renderFaq() {
    const container = document.getElementById('faq-container');
    if (!container) return;

    let html = '';

    faqData.forEach((item, index) => {
        html += `
            <div class="faq-item bg-white border border-gray-200/80 rounded-[12px] overflow-hidden shadow-[0px_2px_12px_rgba(0,0,0,0.02)] transition-all duration-300 mb-3.5">
                <button class="w-full text-left px-5 md:px-6 py-4 md:py-5 flex items-center justify-between focus:outline-none group" onclick="toggleFaq(${index})">
                    <span class="text-[14px] md:text-[15px] font-bold text-gray-900 group-hover:text-brandBlue transition-colors pr-4">${item.question}</span>
                    <div id="faq-icon-wrapper-${index}" class="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center transition-colors duration-300 mt-1 md:mt-0">
                        <svg id="faq-icon-${index}" class="w-3.5 h-3.5 text-gray-500 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>
                </button>
                <div id="faq-answer-${index}" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out opacity-0">
                    <div class="px-5 md:px-6 pb-5 pt-1 text-[13.5px] md:text-[14.5px] text-gray-500 leading-relaxed">
                        ${item.answer}
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function toggleFaq(index) {
    const answerDiv = document.getElementById(`faq-answer-${index}`);
    const iconWrapper = document.getElementById(`faq-icon-wrapper-${index}`);
    const icon = document.getElementById(`faq-icon-${index}`);
    
    // Check if currently open
    const isOpen = !answerDiv.classList.contains('max-h-0');

    // Close all open FAQs (optional: if you only want one open at a time)
    // document.querySelectorAll('[id^="faq-answer-"]').forEach(el => { ... });
    // For this implementation, letting them open individually as typical without auto-closing others

    if (isOpen) {
        // Close it
        answerDiv.classList.add('max-h-0');
        answerDiv.classList.remove('max-h-[500px]');
        answerDiv.classList.remove('opacity-100');
        answerDiv.classList.add('opacity-0');
        
        // Change icon back
        iconWrapper.classList.remove('bg-brandBlue');
        iconWrapper.classList.add('bg-gray-100');
        icon.classList.remove('text-white', 'rotate-180');
        icon.classList.add('text-gray-500');
    } else {
        // Open it
        answerDiv.classList.remove('max-h-0', 'opacity-0');
        answerDiv.classList.add('max-h-[500px]', 'opacity-100');
        
        // Change icon to blue
        iconWrapper.classList.remove('bg-gray-100');
        iconWrapper.classList.add('bg-brandBlue');
        icon.classList.remove('text-gray-500');
        icon.classList.add('text-white', 'rotate-180');
    }
}

// Render on load
document.addEventListener('DOMContentLoaded', renderFaq);
