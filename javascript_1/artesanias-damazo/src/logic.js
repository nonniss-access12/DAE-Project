export function calculateTotalCost(itemCount, itemPrice) {
    const total = itemCount * itemPrice;
    const discount = itemCount >= 5 && itemPrice > 50;
    
    if (discount) {
      console.log("Discount applied!");
      return total * 0.9; // 10% discount
    } else {
      console.log("No discount.");
      return total;
    }
  }
  