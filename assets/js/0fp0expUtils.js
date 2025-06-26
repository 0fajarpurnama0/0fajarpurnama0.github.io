let fajarpurnamatokenbalance = 0;
let fajarpurnamaTokenBalanceEVM = 0;

function update_fajarpurnamatokenbalance() {
  fajarpurnamatokenbalance = fajarpurnamaTokenBalanceEVM + 0;
  document.getElementById("fajarpurnamatokenbalance").innerHTML = fajarpurnamatokenbalance + `<img style="height: 1em; border-radius:50%;" src="/assets/images/icon/0fp0exp-logo-square.png"/>`;
  fajarpurnamatokenservice();
}

function fajarpurnamatokenservice() {
  if (fajarpurnamatokenbalance > 100000) {
      document.getElementById("coinimprange").value = 0;
  }
  if (fajarpurnamatokenbalance > 200000) {
      document.getElementById("coinimp-widget").style.display = "none";
  }
  if (fajarpurnamatokenbalance > 300000) {
      document.getElementById("personal-referrals").style.display = "none";
  }
  if (fajarpurnamatokenbalance > 400000) {
      document.getElementById("paypal-widget").style.display = "none";
  }
  if (fajarpurnamatokenbalance > 500000) {
      document.getElementById("cryptocurrency-donate-widget").style.display = "none";
  }
  if (fajarpurnamatokenbalance > 600000) {
    document.getElementById("buy-nft-widget").style.display = "none";
  }
  if (fajarpurnamatokenbalance > 1000000) {
      document.getElementById("grid-widget").style.display = "none";
      document.getElementById("grid-container").style.gridTemplateColumns = "auto";
  }
  if (fajarpurnamatokenbalance > 1100000) {
    document.getElementById("widgetjsonostfileinput").disabled = false;
  }
  if (fajarpurnamatokenbalance > 1200000) {
    document.getElementById("widgetjsonostlinkinput").disabled = false;
  }
  if (fajarpurnamatokenbalance > 1300000) {
    document.getElementById("widget_json_embedanythingfileinput").disabled = false;
  }
  if (fajarpurnamatokenbalance > 1400000) {
    document.getElementById("widget_json_embedanythinglinkinput").disabled = false;
  }
  if (fajarpurnamatokenbalance > 1500000) {
    document.getElementById("widget_heading1fontsize").disabled = false;
    document.getElementById("widget_heading2fontsize").disabled = false;
    document.getElementById("widget_heading3fontsize").disabled = false;
  }
  if (fajarpurnamatokenbalance > 1600000) {
    document.getElementById("widget_heading4fontsize").disabled = false;
    document.getElementById("widget_heading5fontsize").disabled = false;
    document.getElementById("widget_heading6fontsize").disabled = false;
  }
  if (fajarpurnamatokenbalance > 1700000) {
    document.getElementById("widget_headerfontsize").disabled = false;
    document.getElementById("widget_headerwidgetfontsize").disabled = false;
  }
  if (fajarpurnamatokenbalance > 1800000) {
    document.getElementById("widget_menufontsize").disabled = false;
    document.getElementById("widget_widgetfontsize").disabled = false;
  }
  if (fajarpurnamatokenbalance > 1900000) {
    document.getElementById("widget_footerfontsize").disabled = false;
    document.getElementById("widget_contentfontsize").disabled = false;
  }
  if (fajarpurnamatokenbalance > 2000000) {
    document.getElementById("widget_heading1fontcolor").disabled = false;
    document.getElementById("widget_heading2fontcolor").disabled = false;
    document.getElementById("widget_heading3fontcolor").disabled = false;
  }
  if (fajarpurnamatokenbalance > 2100000) {
    document.getElementById("widget_heading4fontcolor").disabled = false;
    document.getElementById("widget_heading5fontcolor").disabled = false;
    document.getElementById("widget_heading6fontcolor").disabled = false;
  }
  if (fajarpurnamatokenbalance > 2200000) {
    document.getElementById("widget_headerfontcolor").disabled = false;
    document.getElementById("widget_headerwidgetfontcolor").disabled = false;
  }
  if (fajarpurnamatokenbalance > 2300000) {
    document.getElementById("widget_menufontcolor").disabled = false;
    document.getElementById("widget_widgetfontcolor").disabled = false;
  }
  if (fajarpurnamatokenbalance > 2400000) {
    document.getElementById("widget_footerfontcolor").disabled = false;
    document.getElementById("widget_contentfontcolor").disabled = false;
  }
  if (fajarpurnamatokenbalance > 2500000) {
    document.getElementById("widget_heading1fontshadow").disabled = false;
    document.getElementById("widget_heading2fontshadow").disabled = false;
    document.getElementById("widget_heading3fontshadow").disabled = false;
  }
  if (fajarpurnamatokenbalance > 2600000) {
    document.getElementById("widget_heading4fontshadow").disabled = false;
    document.getElementById("widget_heading5fontshadow").disabled = false;
    document.getElementById("widget_heading6fontshadow").disabled = false;
  }
  if (fajarpurnamatokenbalance > 2700000) {
    document.getElementById("widget_headerfontshadow").disabled = false;
    document.getElementById("widget_headerwidgetfontshadow").disabled = false;
  }
  if (fajarpurnamatokenbalance > 2800000) {
    document.getElementById("widget_menufontshadow").disabled = false;
    document.getElementById("widget_widgetfontshadow").disabled = false;
  }
  if (fajarpurnamatokenbalance > 2900000) {
    document.getElementById("widget_footerfontshadow").disabled = false;
    document.getElementById("widget_contentfontshadow").disabled = false;
  }
  if (fajarpurnamatokenbalance >= 3000000) {
    document.getElementById("google-adsense-rectangle").style.display = "none";
  }

  if (fajarpurnamatokenbalance >= 5000000) {
    document.querySelectorAll(".menu")[0].style.display = "none";
    document.getElementById("outer_navigation_menu_button").style.display = "block";
    document.getElementById("set_menu_hide_default").checked = true;
  }

  if (fajarpurnamatokenbalance >= 10000000) {
    document.querySelectorAll(".header-widget")[0].style.display = "none";
    document.getElementById("outer_show_header_widget_button").style.display = "block";
    document.getElementById("set_header_widget_hide_default").checked = true;
  }
}