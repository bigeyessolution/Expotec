/*
 *  This file is part of Expotec App.
 *
 *  Foobar is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  Foobar is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with Foobar.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

$(function()
{
    i18n.init({lng: "en"}).done(function()
    {
        $('.be-mainmenu-btn span').i18n();
    });
    
    $("#btn-goto-top").hide();
    
    $(".animateMe .ui-collapsible-heading-toggle").on("click", function (e) {
        current = $(this).closest(".ui-collapsible");

        if (current.hasClass("ui-collapsible-collapsed")) {
            //collapse all others and then expand this one
            $(".ui-collapsible").not(".ui-collapsible-collapsed").find(
                ".ui-collapsible-heading-toggle"
                ).click();
            $(".ui-collapsible-content", current).slideDown(300);
        } else {
            $(".ui-collapsible-content", current).slideUp(300);
        }
    });
    
    $(":mobile-pagecontainer").on("pagecontainerbeforechange", function(event, ui)
    {
        if (typeof ui.toPage !== 'object') return;
        
        nextPage = ui.toPage;
        nextPageId = $(ui.toPage).attr('id');
        
        switch (nextPageId) {
            case 'schedule-page':
                break;
            case 'speekers-page':
                break;
            case 'news-page':
                break;
            default:
        }
    });
    
});


