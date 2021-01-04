import React from 'react';
import Button from "./components/Button";

const App: React.FC = () => {
  return (
    <>
      <Button
        text="access"
      />
      <Button
        text="login"
        backgroundColors={["red", "orange"]}
        maxHeight={10}
        maxWidth={20}
        textColor="#CECAC3"
      />
      <Button
        text="loading"
        backgroundColors={["violet", "blue"]}
        maxHeight={10}
        maxWidth={20}
        textColor="#CECAC3"
        isLoading={true}
      />
      <Button
        text="loading"
        backgroundColors={["violet", "blue"]}
        maxHeight={10}
        maxWidth={20}
        textColor="#CECAC3"
        isLoading={true}
        disabled={true}
      />
    </>
  );
}

export default App;