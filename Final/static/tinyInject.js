var script = document.createElement('script');
script.type = 'text/javascript';
script.src = "https://cdn.tiny.cloud/1/xsxs0gpk7yt4jfqanrhr7cm2zqytz61f9ooupgt8z73ccb3i/tinymce/5/tinymce.min.js";
document.head.appendChild(script);

script.onload = function() {
    tinymce.init({
        selector: "#id_content", // Ensure this matches the ID of the textarea you want to convert to TinyMCE
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
        content_css: '/static/css/content.css' // Ensure this path is correct for your project
    });
}
