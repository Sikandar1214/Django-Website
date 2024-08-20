

<script src="{% static 'js/tinyInject.js' %}"></script>
console.log("TinyMCE script loaded");
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = "{% static 'js/tinyInject.js' %}";
document.head.appendChild(script);

script.onload = function() {
    console.log("TinyMCE script loaded and initialized");
    tinymce.init({
        selector: "#id_content",
        height: 656,
        plugins: [
            'advlist autolink link image lists charmap print preview hr anchor pagebreak',
            'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
            'table emoticons template paste help'
        ],
        toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | ' +
            'bullist numlist outdent indent | link image | print preview media fullpage | ' +
            'forecolor backcolor emoticons | help',
        menu: {
            favs: { title: 'My Favorites', items: 'code visualaid | searchreplace | emoticons' }
        },
        menubar: 'favs file edit view insert format tools table help',
        content_css: '{% static 'css/content.css' %}'
    });
};
