function get_calc(btn) {
      if(btn.value == "=") {
        document.dentaku.display.value = eval(document.dentaku.display.value);
      } else if (btn.value == "C") {
        document.dentaku.display.value = "";
      } else if(btn.value == "e") {
        btn.value = Math.E;
        document.dentaku.pi_btn.value = "e";
      } else if(btn.value == "π") {
        btn.value = Math.PI;
        document.dentaku.pi_btn.value = "π";
      } else if(btn.value == "sin") {
        btn.value = Math.sin;
        document.dentaku.pi_btn.value = "sin";
      } else if(btn.value == "cos") {
        btn.value = Math.cos;
        document.dentaku.pi_btn.value = "cos";
      } else if(btn.value == "tan") {
        btn.value == Math.tan;
        document.dentaku.pi_btn.value = "tan";
      } else {
        if (btn.value == "×") {
          btn.value = "*";
        } else if (btn.value == "÷") {
          btn.value = "/";
        } 
        document.dentaku.display.value += btn.value;
        document.dentaku.add_btn.value = "×";
        document.dentaku.div_btn.value = "÷";
      }
    }
