import React from "react";
import { useState, type JSX } from "react";

function User({ name, age }: { name: string; age: number }): JSX.Element {
  return (
    <div>
      {name} {age}
    </div>
  );
}

export default User;
