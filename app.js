const binaryInput = document.querySelector('#binary');
        const btn = document.querySelector('.btn');
        const result = document.querySelector('.result');
        btn.addEventListener('click', () => {
            const binary = binaryInput.value;
            //check if the input is a binary number or not
            if (binary.match(/^[0-1]+$/)) {
                const decimal = parseInt(binary, 2);
                result.textContent = `Decimal Number : ${decimal}`;
            } else {
                result.textContent = 'please enter a binary number';
            }
        });