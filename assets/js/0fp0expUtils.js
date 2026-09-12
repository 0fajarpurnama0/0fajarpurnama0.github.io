// Safely hides an element if the condition is met; restores it if not.
function safeHide(id, shouldHide) {
    const el = document.getElementById(id);
    if (el) el.style.display = shouldHide ? "none" : "";
}

// Safely enables an element if the condition is met; disables it if not.
function safeEnable(id, shouldEnable) {
    const el = document.getElementById(id);
    if (el) el.disabled = !shouldEnable;
}

// Safely apply changes to an array of IDs
function batchEnable(ids, shouldEnable) {
    ids.forEach(id => safeEnable(id, shouldEnable));
}

// Main service function - now accepts the balance directly as a parameter
function fajarpurnamatokenservice(balanceStr) {
    // Ensure the balance is treated as a numeric float, defaulting to 0
    const balance = parseFloat(balanceStr) || 0;

    // 1. Value Overrides
    const coinImpRange = document.getElementById("coinimprange");
    if (coinImpRange) {
        // Assuming you want it to revert to a default (e.g., 50) if balance drops
        coinImpRange.value = balance > 100000 ? 0 : 50; 
    }

    // 2. Hide Widgets based on balance thresholds
    safeHide("coinimp-widget", balance > 200000);
    safeHide("personal-referrals", balance > 300000);
    safeHide("paypal-widget", balance > 400000);
    safeHide("cryptocurrency-donate-widget", balance > 500000);
    safeHide("buy-nft-widget", balance > 600000);
    safeHide("google-adsense-rectangle", balance >= 3000000);

    const gridWidget = document.getElementById("grid-widget");
    const gridContainer = document.getElementById("grid-container");
    if (gridWidget) gridWidget.style.display = balance > 1000000 ? "none" : "";
    if (gridContainer) gridContainer.style.gridTemplateColumns = balance > 1000000 ? "auto" : ""; // Assuming "" reverts to CSS default

    // 3. Enable Inputs based on balance thresholds
    safeEnable("widgetjsonostfileinput", balance > 1100000);
    safeEnable("widgetjsonostlinkinput", balance > 1200000);
    safeEnable("widget_json_embedanythingfileinput", balance > 1300000);
    safeEnable("widget_json_embedanythinglinkinput", balance > 1400000);

    // Grouping related DOM elements makes threshold management cleaner
    batchEnable([
        "widget_heading1fontsize", "widget_heading2fontsize", "widget_heading3fontsize"
    ], balance > 1500000);

    batchEnable([
        "widget_heading4fontsize", "widget_heading5fontsize", "widget_heading6fontsize"
    ], balance > 1600000);

    batchEnable([
        "widget_headerfontsize", "widget_headerwidgetfontsize"
    ], balance > 1700000);

    batchEnable([
        "widget_menufontsize", "widget_widgetfontsize"
    ], balance > 1800000);

    batchEnable([
        "widget_footerfontsize", "widget_contentfontsize"
    ], balance > 1900000);

    batchEnable([
        "widget_heading1fontcolor", "widget_heading2fontcolor", "widget_heading3fontcolor"
    ], balance > 2000000);

    batchEnable([
        "widget_heading4fontcolor", "widget_heading5fontcolor", "widget_heading6fontcolor"
    ], balance > 2100000);

    batchEnable([
        "widget_headerfontcolor", "widget_headerwidgetfontcolor"
    ], balance > 2200000);

    batchEnable([
        "widget_menufontcolor", "widget_widgetfontcolor"
    ], balance > 2300000);

    batchEnable([
        "widget_footerfontcolor", "widget_contentfontcolor"
    ], balance > 2400000);

    batchEnable([
        "widget_heading1fontshadow", "widget_heading2fontshadow", "widget_heading3fontshadow"
    ], balance > 2500000);

    batchEnable([
        "widget_heading4fontshadow", "widget_heading5fontshadow", "widget_heading6fontshadow"
    ], balance > 2600000);

    batchEnable([
        "widget_headerfontshadow", "widget_headerwidgetfontshadow"
    ], balance > 2700000);

    batchEnable([
        "widget_menufontshadow", "widget_widgetfontshadow"
    ], balance > 2800000);

    batchEnable([
        "widget_footerfontshadow", "widget_contentfontshadow"
    ], balance > 2900000);

    // 4. Special UI Toggles
    const menuItems = document.querySelectorAll(".menu");
    const outerNavButton = document.getElementById("outer_navigation_menu_button");
    const menuHideDefault = document.getElementById("set_menu_hide_default");
    
    if (menuItems.length > 0 && outerNavButton && menuHideDefault) {
        if (balance >= 5000000) {
            menuItems[0].style.display = "none";
            outerNavButton.style.display = "block";
            menuHideDefault.checked = true;
        } else {
            menuItems[0].style.display = ""; // Revert to CSS default
            outerNavButton.style.display = "none";
            menuHideDefault.checked = false;
        }
    }

    const headerWidgets = document.querySelectorAll(".header-widget");
    const outerHeaderButton = document.getElementById("outer_show_header_widget_button");
    const headerHideDefault = document.getElementById("set_header_widget_hide_default");
    
    if (headerWidgets.length > 0 && outerHeaderButton && headerHideDefault) {
        if (balance >= 10000000) {
            headerWidgets[0].style.display = "none";
            outerHeaderButton.style.display = "block";
            headerHideDefault.checked = true;
        } else {
            headerWidgets[0].style.display = ""; // Revert to CSS default
            outerHeaderButton.style.display = "none";
            headerHideDefault.checked = false;
        }
    }
}