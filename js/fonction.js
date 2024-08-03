$(document).ready(function($){
                    $('#accordion-1').dcAccordion({
                        eventType: 'click',
                        autoClose: true,
                        saveState: false,
                        disableLink: true,
                        speed: 'slow',
                        showCount: true,
                        autoExpand: true,
                        cookie  : '',
                        classExpand  : 'dcjq-current-parent'
                    });

    }); Shadowbox.init();