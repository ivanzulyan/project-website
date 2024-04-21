import React, { useState } from 'react';
import regression from 'regression'; // Menggunakan paket regression untuk regresi linear

const Prediksi = () => {
  const [inputData, setInputData] = useState([{ year: '', population: '' }]);
  const [predictionYear, setPredictionYear] = useState('');
  const [prediction, setPrediction] = useState(null);

  const handleInputChange = (index, event) => {
    const values = [...inputData];
    values[index][event.target.name] = event.target.value;
    setInputData(values);
  };

  const handleAddInput = () => {
    setInputData([...inputData, { year: '', population: '' }]);
  };

  const handleRemoveInput = (index) => {
    const values = [...inputData];
    values.splice(index, 1);
    setInputData(values);
  };

  const handlePredict = () => {
    // Convert data input into format required by regression package
    const data = inputData.map(({ year, population }) => [parseFloat(year), parseFloat(population)]);

    // Train linear regression model
    const result = regression.linear(data);

    // Predict population for the given year
    const predictedValue = result.predict(parseFloat(predictionYear));

    setPrediction(predictedValue[1]); // Get the y value (population)
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Tinjaulah dan buatlah proyeksi tentang pertumbuhan penduduk di wilayah Anda yang berkelanjutan.</h1>
      <div className="space-y-4">
        {inputData.map((input, index) => (
          <div key={index} className="flex items-center space-x-4">
            <input
              type="number"
              name="year"
              placeholder="Year"
              value={input.year}
              onChange={(event) => handleInputChange(index, event)}
              className="border border-gray-300 px-3 py-2 rounded-md"
            />
            <input
              type="number"
              name="population"
              placeholder="Population"
              value={input.population}
              onChange={(event) => handleInputChange(index, event)}
              className="border border-gray-300 px-3 py-2 rounded-md"
            />
            {index === inputData.length - 1 && (
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                onClick={handleAddInput}
              >
                Add
              </button>
            )}
            {inputData.length > 1 && (
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
                onClick={() => handleRemoveInput(index)}
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <div className="flex items-center space-x-4">
          <input
            type="number"
            placeholder="Prediction Year"
            value={predictionYear}
            onChange={(event) => setPredictionYear(event.target.value)}
            className="border border-gray-300 px-3 py-2 rounded-md"
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
            onClick={handlePredict}
          >
            Prdiksi
          </button>
        </div>
        {prediction !== null && (
          <div>
            <p className="font-semibold">Prediksi Penduduk Pada Tahun Adalah {predictionYear}:</p>
            <p>{prediction.toFixed(2)} Penduduk</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Prediksi;
