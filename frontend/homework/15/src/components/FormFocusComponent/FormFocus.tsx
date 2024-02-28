import React, { useRef, useEffect } from 'react';

export function FormFocus() {
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, [firstInputRef]); 

  return (
    <div>
      <h1>Form Page</h1>
      <form>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" ref={firstInputRef} />

        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormFocus;
