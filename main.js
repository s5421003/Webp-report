function get_calc(btn) {
    if(btn.value == "=") {
          document.dentaku.display.value = eval(document.dentaku.display.value);
    } else if (btn.value == "C") {
          document.dentaku.display.value = "";
    } else {
      if (btn.value == "×") {
            btn.value = "*";
      } else if (btn.value == "÷") {
            btn.value = "/";
      } else if(btn.value == "e") {
            btn.value = Math.E;
      } else if(btn.value == "π") {
            btn.value = Math.PI;
      } else if(btn.value == "sin") {
            // btn.value = Math.sin(document.dentaku.display.value);
            document.dentaku.display.value = eval(Math.sin(document.dentaku.display.value * Math.PI / 180));
      } else if(btn.value == "cos") {
            // btn.value = Math.cos(document.dentaku.display.value);
            document.dentaku.display.value = eval(Math.cos(document.dentaku.display.value * Math.PI / 180));
      } else if(btn.value == "tan") {
            // btn.value = Math.tan(document.dentaku.display.value);
            document.dentaku.display.value = eval(Math.tan(document.dentaku.display.value * Math.PI / 180));
      } else if(btn.value == "log") {
            // btn.value = Math.log(document.dentaku.display.value);
            document.dentaku.display.value = eval(Math.log(document.dentaku.display.value));
      } else if(btn.value == "a^2") {
            document.dentaku.display.value = eval(Math.pow(document.dentaku.display.value, 2));
      } else if(btn.value == "√") {
            document.dentaku.display.value = eval(Math.sqrt(document.dentaku.display.value));
      } 
      if(btn.value != "sin" && btn.value != "cos" && btn.value != "tan" && btn.value != "log" && btn.value != "a^2" && btn.value != "√") {
          document.dentaku.display.value += btn.value;
      }
          document.dentaku.add_btn.value = "×";
          document.dentaku.div_btn.value = "÷";
          document.dentaku.nei_btn.value = "e";
          document.dentaku.pi_btn.value = "π";
          document.dentaku.sin_btn.value = "sin";
          document.dentaku.cos_btn.value = "cos";
          document.dentaku.tan_btn.value = "tan";
          document.dentaku.log_btn.value = "log";
    }
  }