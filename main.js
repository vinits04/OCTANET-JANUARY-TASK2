const leftInputBox = document.getElementById("left-input-box");
      const leftListContainer = document.getElementById("left-list-container");

      function addLeftTask() {
        if (leftInputBox.value === "") {
          alert("You must write something");
        } else {
          let li = document.createElement("li");
          li.innerHTML = leftInputBox.value;
          leftListContainer.appendChild(li);
          let span = document.createElement("span");
          span.innerHTML = "\u00d7";
          li.appendChild(span);
        }
        leftInputBox.value = "";
        saveLeftData();
      }

      const RightInputBox = document.getElementById("Right-input-box");
      const RightListContainer = document.getElementById(
        "Right-list-container"
      );

      function addRightTask() {
        if (RightInputBox.value === "") {
          alert("You must write something");
        } else {
          let li = document.createElement("li");
          li.innerHTML = RightInputBox.value;
          RightListContainer.appendChild(li);
          let span = document.createElement("span");
          span.innerHTML = "\u00d7";
          li.appendChild(span);
        }
        RightInputBox.value = "";
        saveRightData();
      }

     
      function saveLeftData() {
        localStorage.setItem("leftData", leftListContainer.innerHTML);
      }

      function saveRightData() {
        localStorage.setItem("RightData", RightListContainer.innerHTML);
      }

      
      function showLeftTask() {
        leftListContainer.innerHTML = localStorage.getItem("leftData");
      }
      function showRightTask() {
        RightListContainer.innerHTML = localStorage.getItem("RightData");
      }
      showLeftTask();
      showRightTask();

      leftListContainer.addEventListener(
        "click",
        function (event) {
          if (event.target.tagName === "LI") {
            event.target.classList.toggle("checked");
            saveLeftData();
          } else if (event.target.tagName === "SPAN") {
            event.target.parentElement.remove();
            saveLeftData();
          }
        },
        false
      );

      RightListContainer.addEventListener(
        "click",
        function (event) {
          if (event.target.tagName === "LI") {
            event.target.classList.toggle("checked");
            saveRightData();
          } else if (event.target.tagName === "SPAN") {
            event.target.parentElement.remove();
            saveRightData();
          }
        },
        false
      );