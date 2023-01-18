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
        }　else if(btn.value == "π") {
              btn.value = Math.PI;
        } else if(btn.value == "sin") {
              btn.value = Math.sin(x);
        } else if(btn.value == "cos") {
              btn.value = Math.cos(x);
        } else if(btn.value == "tan") {
              btn.value == Math.tan(x);
        } else if(btn.value == "log") {
              btn.value == Math.log(x);
        }
            document.dentaku.display.value += btn.value;
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
