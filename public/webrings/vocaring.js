import { useEffect } from "react";

export default function Vocaring() {
  useEffect(() => {
    const vocaring = document.getElementById("vocaring");

    if (vocaring) {
      vocaring.innerHTML = `
      <style>
      @font-face{
          font-family:'Legacy';
          src:url(https://files.catbox.moe/vb0fng.otf);
      }

      #vocaring{
          width:fit-content;
          height:fit-content;
          margin:0 auto;
      }

      .vocacontainer::selection {
          background:#4cd4de;
          color:white;
      }

      .vocacontainer::-moz-selection {
          background:#4cd4de;
          color:white;
      }

      .vocacontainer{
          width:210px;
          height:fit-content;
          padding:10px;
          background-color:#c9eff2;
          border:4px solid #4cd4de;
          box-sizing:border-box;
      }

      .vocacontainer table {
          margin:0;
      }

      .vocacontainer .webring-info {
          text-align:center;
          font-family:'Legacy';
          color:#e74492;
          font-size:27px;
          letter-spacing:3px;
          text-shadow:#ffffff 2px 0px 0px, #ffffff 1.75517px 0.958851px 0px, #ffffff 1.0806px 1.68294px 0px, #ffffff 0.141474px 1.99499px 0px, #ffffff -0.832294px 1.81859px 0px, #ffffff -1.60229px 1.19694px 0px, #ffffff -1.97999px 0.28224px 0px, #ffffff -1.87291px -0.701566px 0px, #ffffff -1.30729px -1.51361px 0px, #ffffff -0.421592px -1.95506px 0px, #ffffff 0.567324px -1.91785px 0px, #ffffff 1.41734px -1.41108px 0px, #ffffff 1.92034px -0.558831px 0px;
          line-height:100%;
          margin-bottom:5px;
      }

      .vocacontainer .webring-links{
          font-size:17px;
          font-family:'Arial';
          color:#e74492;
      }

      .vocacontainer .webring-links a{
          text-decoration: none;
          color:#e74492;
          text-shadow:#ffffff 2px 0px 0px, #ffffff 1.75517px 0.958851px 0px, #ffffff 1.0806px 1.68294px 0px, #ffffff 0.141474px 1.99499px 0px, #ffffff -0.832294px 1.81859px 0px, #ffffff -1.60229px 1.19694px 0px, #ffffff -1.97999px 0.28224px 0px, #ffffff -1.87291px -0.701566px 0px, #ffffff -1.30729px -1.51361px 0px, #ffffff -0.421592px -1.95506px 0px, #ffffff 0.567324px -1.91785px 0px, #ffffff 1.41734px -1.41108px 0px, #ffffff 1.92034px -0.558831px 0px;
          filter:drop-shadow( 0 2px var(--bc)) drop-shadow( 2px 0 var(--bc)) drop-shadow( 0 -2px var(--bc)) drop-shadow(-2px 0 var(--bc));
          transition:0.3s;
      }

      .vocacontainer .webring-links a:hover{
          letter-spacing:normal;
      }

      .vocacontainer img {
          display:inline !important;
      }
      </style>
      `;

      // Fetch and populate widget content
      fetch("https://webring.adilene.net/webring.json")
        .then((response) => response.json())
        .then((urlList) => {
          const currentSite = window.location.href;
          let currentIndex = null;

          for (let i = 0; i < urlList.length; i++) {
            if (currentSite.startsWith(urlList[i])) {
              currentIndex = i;
              break;
            }
          }

          if (currentIndex == null) {
            vocaring.insertAdjacentHTML(
              "afterbegin",
              `
                <table class='vocacontainer' style='text-align: center;'>
                    <tr>
                        <td>
                            <div class='webring-info'>VOCALOID<br>WEBRING</div>
                            <div class='webring-links'>
                                This site is not part of the VOCALOID Webring. Please sign up <a href='https://webring.adilene.net/' target='_parent'>here</a> to join. If you believe this is an error, please contact me at <a href='mailto:a@adilene.net'>a@adilene.net</a>.
                            </div>
                        </td>
                    </tr>
                </table>
              `
            );
          } else {
            const previousIndex =
              currentIndex - 1 < 0 ? urlList.length - 1 : currentIndex - 1;
            const nextIndex =
              currentIndex + 1 >= urlList.length ? 0 : currentIndex + 1;

            vocaring.insertAdjacentHTML(
              "afterbegin",
              `
                <table class='vocacontainer' style='text-align: center;'>
                    <tr>
                        <td>
                            <div class='webring-info'>VOCALOID<br>WEBRING</div>
                            <div class='webring-links'>
                                <a href='${urlList[previousIndex]}' target='_parent'>&#9664;</a> 
                                <a href='https://webring.adilene.net/index.php' target='_parent'>Index</a> &#8226; 
                                <a href='https://webring.adilene.net/members.php' target='_parent'>Members</a> 
                                <a href='${urlList[nextIndex]}' target='_parent'>&#9654;</a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style='text-align:center;'><img src='https://adilene.net/webring/images/vocaloid.png'/></td>
                    </tr>
                </table>
              `
            );
          }
        })
        .catch((error) => {
          console.error("Error fetching webring.json:", error);
        });
    }
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return <div id="vocaring"></div>;
}
