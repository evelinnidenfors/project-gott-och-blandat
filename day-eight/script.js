window.onload = () => {
  const labels = document.querySelectorAll(".form label");

  labels.forEach((label) => {
    label.querySelectorAll('span').forEach((span, idx) => {
      span.style['transitionDelay'] = `${idx * 50}ms`
    });
  });

  const email = document.getElementById("email");
  const password = document.getElementById("password");

  email.onfocus = function() {
    document.querySelectorAll("#email ~ label span").forEach((span) => {
      span.style.color = "#DDBEA9";
      span.style.transform = "translateY(-30px)";
    });
  }

  password.onfocus = function() {
    document.querySelectorAll("#password ~ label span").forEach((span) => {
      span.style.color = "#DDBEA9";
      span.style.transform = "translateY(-30px)";
    });
  }

  email.onblur = function() {
    document.querySelectorAll("#email ~ label span").forEach((span) => {
      span.style.color = "#fff";
      span.style.transform = "translateY(0)";
    });
  }

  password.onblur = function() {
    document.querySelectorAll("#password ~ label span").forEach((span) => {
      span.style.color = "#fff";
      span.style.transform = "translateY(0)";
    });
  }
};
