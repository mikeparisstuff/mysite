$(function() {
    var dropbox = document.getElementById("dropbox");

    dropbox.addEventListener("dragenter", noopHandler, false);
    dropbox.addEventListener("dragexit", noopHandler, false);
    dropbox.addEventListener("dragover", dragOver, false);
    dropbox.addEventListener("drop", drop, false);

    function dragOver(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        evt.dataTransfer.dropEffect = 'copy';
    }

    function noopHandler(evt) {
        evt.stopPropagation();
        evt.preventDefault();
    }

    function drop(evt) {
        evt.stopPropagation();
        evt.preventDefault();

        var files = evt.dataTransfer.files;
        var count = files.length;

        // Only call the handler if 1 or more files was dropped.
        if (count > 0) {
            handleFiles(files);
        }
    }

    function handleReaderLoad(evt) {
        var dropbox = document.getElementById("dropbox");
        var newImg = document.createElement("img");
        document.getElementById("droplabel").innerHTML = "Image Dropped!";
        newImg.src = evt.target.result;
        newImg.className = "image";
        dropbox.appendChild(newImg);
        //document.body.appendChild(newImg);
    }

    function handleFiles(files) {
        var file = files[0];
        document.getElementById("droplabel").innerHTML = "Processing " + file.name;

        var reader = new FileReader();
        // init the reader event handler.
        reader.onload = handleReaderLoad;
        // begin the read operation.
        reader.readAsDataURL(file);
    }

});