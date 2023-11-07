import { useState } from 'react';

const ShareExperience = () => {
  const [experience, setExperience] = useState('');
  const maxWords = 150;

  const handleChange = (e) => {
    const text = e.target.value;
    const words = text.split(' ');
    if (words.length <= maxWords) {
      setExperience(text);
    }
  };

  const handleSubmit = () => {
    console.log("Submitted Experience:", experience);
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Share Your Experience!</h2>
      <textarea
        className="w-full p-2 border rounded-lg resize-none"
        rows="5"
        placeholder={`Share your experience (max ${maxWords} words)`}
        value={experience}
        onChange={handleChange}
      />
      <p className="text-sm text-gray-500">{experience.split(' ').length}/{maxWords} words</p>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        onClick={handleSubmit}
      >
        Submit!
      </button>
    </div>
  );
};

export default ShareExperience;
