


const dropdownIcon = document.getElementById('dropdownIcon');
        const dropdownMenu = document.getElementById('dropdownMenu');

        dropdownIcon.addEventListener('click', () => {
            dropdownMenu.classList.toggle('hidden');
        });

        // Close the dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!dropdownIcon.contains(e.target) && !dropdownMenu.contains(e.target)) {
                dropdownMenu.classList.add('hidden');
            }
        });