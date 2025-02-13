
    function toggleHourlyWork() {
      const hourCount = document.getElementById('hourCount');
      if (document.getElementById('hourlyWork').checked) {
        hourCount.style.display = 'block';
      } else {
        hourCount.style.display = 'none';
        hourCount.value = '';
        calculatePrice();
      }
    }

    function calculatePrice() {
      const servicePrice = parseFloat(document.getElementById('service').value);
      const discount = parseFloat(document.getElementById('discount').value);
      const surcharge = parseFloat(document.getElementById('surcharge').value);
      const travelCost = parseFloat(document.getElementById('travelCost').value) || 0;
      const travelPrice = travelCost * 10; // Cena za kilometr (10 Kč/km)
      
      let finalPrice = servicePrice + travelPrice;
      
      if (document.getElementById('returnTrip').checked) finalPrice += 250;
      if (document.getElementById('technicianCall').checked) finalPrice += 450;
      if (document.getElementById('expressService').checked) finalPrice += 650;
      if (document.getElementById('hourlyWork').checked) {
        const hourCount = parseFloat(document.getElementById('hourCount').value) || 0;
        finalPrice += hourCount * 500;
      }
      
      finalPrice += finalPrice * surcharge;
      finalPrice += finalPrice * discount;
      
      document.getElementById('result').textContent = `Cena: ${finalPrice.toFixed(2)} Kč`;
    }

