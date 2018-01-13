cur.ny2018Enabled = true;
window.ny2018ReplaceText = function(e) {
    return e.replace(/(с новым годом|с наступающим|очько|бутылка|залупа не мытая)([\!]+)?(?=(\s|\,|\<br\>|$))?/i, function(e) {
        return '<span class="ny2017_link" onClick="Ny2k18.startFlapper(); return false;">' + e + "</span>";
    });
};
