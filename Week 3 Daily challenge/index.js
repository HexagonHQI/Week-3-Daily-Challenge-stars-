// First way to do it//
for (let i = 1; i <= maxnumber; i++) {
    let row = "";
    // Nested loop for stars in each row
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row.trimEnd()); // Remove trailing space
  }
  
//second way to do it //
  for (let i = 1; i <= 6; i++) {
    const stars = "*".repeat(i);
    console.log(stars.padStart(6, " ")); // Pad with spaces to create right alignment
  }
  