function calculateRWL() {
    // Get input values
    const loadConstant = parseFloat(document.getElementById('loadConstant').value);
    const horizontalMultiplier = parseFloat(document.getElementById('horizontalMultiplier').value);
    const verticalMultiplier = parseFloat(document.getElementById('verticalMultiplier').value);
    const distanceMultiplier = parseFloat(document.getElementById('distanceMultiplier').value);
    const asymmetricMultiplier = parseFloat(document.getElementById('asymmetricMultiplier').value);
    const frequencyMultiplier = parseFloat(document.getElementById('frequencyMultiplier').value);
    const couplingMultiplier = parseFloat(document.getElementById('couplingMultiplier').value);

    // Make AJAX request to the backend
    fetch(`http://localhost:8080/calculateRWL?loadConstant=${loadConstant}&horizontalMultiplier=${horizontalMultiplier}&verticalMultiplier=${verticalMultiplier}&distanceMultiplier=${distanceMultiplier}&asymmetricMultiplier=${asymmetricMultiplier}&frequencyMultiplier=${frequencyMultiplier}&couplingMultiplier=${couplingMultiplier}`)
    
        .then(response => response.json())
        .then(data => {
            // Display the result
            const rwl = data.rwl;
            const li = data.li;
            const hValue = data.hValue;
            const vValue = data.vValue;
            const dValue = data.dValue;
            const aValue = data.aValue;
            const couplingType = data.couplingType;
            const liValue = data.liValue;
            const riskImplication = data.riskImplication;
            const recommendations = data.recommendations;

            // Display the result
            const result = `
                <h2>RESULTS</h2>
                <p>${new Date().toLocaleDateString()}</p>
                <h3>RWL</h3>
                <p>PARAMETERS</p>
                <ul>
                    <li>Load Constant: ${loadConstant}</li>
                    <li>Horizontal Multiplier: ${horizontalMultiplier}</li>
                    <li>Vertical Multiplier: ${verticalMultiplier}</li>
                    <li>Distance Multiplier: ${distanceMultiplier}</li>
                    <li>Asymmetry Multiplier: ${asymmetricMultiplier}</li>
                    <li>Frequency Multiplier: ${frequencyMultiplier}</li>
                    <li>Coupling Multiplier: ${couplingMultiplier}</li>
                </ul>
                <h3>VALUES</h3>
                <ul>
                    <li>Load Constant: ${loadConstant}</li>
                    <li>Horizontal Multiplier: ${horizontalMultiplier}</li>
                    <li>Vertical Multiplier: ${verticalMultiplier}</li>
                    <li>Distance Multiplier: ${distanceMultiplier}</li>
                    <li>Asymmetry Multiplier: ${asymmetricMultiplier}</li>
                    <li>Frequency Multiplier: ${frequencyMultiplier}</li>
                    <li>Coupling Multiplier: ${couplingMultiplier}</li>
                </ul>
                <h3>RWL Calculation</h3>
                <p>${rwl}</p>
                <h3>Lifting Index</h3>
                <p>${li}</p>
                <h3>H value:</h3>
                <p>${hValue}</p>
                <h3>V value:</h3>
                <p>${vValue}</p>
                <h3>D value:</h3>
                <p>${dValue}</p>
                <h3>A value:</h3>
                <p>${aValue}</p>
                <h3>Coupling type:</h3>
                <p>${couplingType}</p>
                <h3>Lifting Index Value</h3>
                <p>${liValue}</p>
                <h3>Risk Implication</h3>
                <p>${riskImplication}</p>
                <h3>Recommended Actions</h3>
                <p>${recommendations}</p>
            `;
            
            document.getElementById('result').innerHTML = result;

            // Create PDF
            createPDF(result);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function createPDF(result) {
    // Code to create PDF goes here
    // You can use libraries like jsPDF or pdfmake for creating PDF
}
