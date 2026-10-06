document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.faq-container').forEach(container => {
        const items = [...container.querySelectorAll('.faq-item')];

        items.forEach(item => {
            const question = item.querySelector('.faq-question');

            question.addEventListener('click', () => {
                const shouldOpen = !item.classList.contains('active');

                items.forEach(otherItem => {
                    const otherQuestion = otherItem.querySelector('.faq-question');
                    const isOpen = otherItem === item && shouldOpen;

                    otherItem.classList.toggle('active', isOpen);
                    otherQuestion.setAttribute('aria-expanded', String(isOpen));
                });
            });
        });
    });
});