
        let index

        function updateClipboard(elt) {
            /* le presse-papier est correctement paramétré */
            navigator.permissions.query({name: "clipboard-write"}).then(result => {
                if (result.state == "granted" || result.state == "prompt") {
                    navigator.clipboard.writeText(elt.innerHTML).then(function() {
                        console.log("text copied: " + elt.innerHTML)
                    
                    }, function() {
                        alert('copy permission rejected')
                    })
                } else alert('erreur copie')
            })
        }
        Array.from(copypast.querySelectorAll('span')).map(elt=>{elt.addEventListener('click', (e)=>{updateClipboard(e.target)})})

        select.focus()

        for(index in jsonDatas){
            let opt = document.createElement('option')
            opt.value = index
            opt.innerHTML = index+": "+jsonDatas[index].h
            opt.data = jsonDatas[index]
            // console.log(opt.data);
            select.append(opt)
        }

        let s_array = Array.from(select.querySelectorAll('option'))
        if(document.location.hash != ""){
            for(let a in s_array)if("#"+s_array[a].value == document.location.hash){
                select.selectedIndex = a
                // console.log(a.value);
                // console.log('ok');
                select.onchange()
            }
        }
         
        function selectOnchange(that){
            // console.log(that);
            // alert(select.selectedIndex)
            // alert(select.childNodes[select.selectedIndex].value)
            // console.log(select.querySelectorAll('option')[select.selectedIndex]);
            let opt = select.querySelectorAll('option')[select.selectedIndex]
            console.log(opt.data);
            // alert(opt.value)
            document.location.hash = select.value
            // console.log(select.value);

            iframe.src = "http://localhost:3000"
            iframe_jsx.src = opt.data.begin == "" || opt?.data?.begin?.indexOf('codepen') != -1 
                ? ""
                : "./_/begins/"+select.value+"/src/"
            iframe_css.src = opt.data.begin == "" || opt?.data?.begin?.indexOf('codepen') != -1 
                ? ""
                : "./_/begins/"+select.value+"/src/styles"
            _begin.href = opt?.data?.begin?.indexOf('codepen') != -1 
                ? opt.data.begin
                : ""
            _begin.innerHTML = opt.data.begin.indexOf('codepen') != -1 
                ? "Codepen Begin"
                : opt.data.begin.indexOf('github')
                    ? "Github Begin"
                : ""
            _sol.href = opt?.data?.sol?.indexOf('codepen') != -1 
                ? opt.data.sol
                : ""
            _sol.innerHTML = opt.data.sol.indexOf('codepen') != -1 
                ? "Codepen Solution"
                : opt.data.sol.indexOf('github')
                    ? "Github Solution"
                    : ""
            _SC.href = opt?.data?.liens?.[0]?.indexOf('vimeo') != -1 
                ? opt.data.liens[0]
                : ""
            _SC.innerHTML = opt.data.liens?.[0].indexOf('vimeo') != -1 
                ? "SCREENCAST vidéo"
                : ""
            
            if(opt.data.begin != "" && opt.data.begin.indexOf('codepen') == -1){
                copypast.className = ""
                from_root.innerHTML = "cd ./_/begins/"+select.value+"; npm run start"
                from_inner.innerHTML = "cd ../"+select.value+"; npm run start"
            }else copypast.className = "off"

            h1.innerHTML = p.innerHTML = tasks_p.innerHTML = tasks_ol.innerHTML = ""
            h1.innerHTML = opt.data.h
            p.innerHTML = opt.data.p
            tasks_p.innerHTML = opt.data.tasks.p
            opt.data.tasks.ol.map((item) => { 
                let li = document.createElement('li')
                li.innerHTML = item
                li.style.width = window.innerWidth > 1000 
                    ? "calc(" + (100 / Math.floor(opt.data.tasks.ol.length / 2)) + "% - 1em)"
                    : "calc(" + (100 / Math.floor(opt.data.tasks.ol.length / 3)) + "% - 1em)"
                tasks_ol.append(li) 
            })

        }
        function move(smthg){
            if(typeof smthg == "undefined" && select.selectedIndex>1){
                select.selectedIndex = select.selectedIndex - 1
                select.onchange()
            }
            if(typeof smthg != "undefined" && select.selectedIndex<26){
                select.selectedIndex = select.selectedIndex + 1
                select.onchange()
            }
            // console.log(s_array);
            // console.log(s_array[select.selectedIndex]);
            // console.log(s_array[select.selectedIndex].value);
            document.location.hash = s_array[select.selectedIndex].value
        }
        document.querySelector("header>a:first-of-type").addEventListener('click', (e)=>{e.preventDefault();move();})
        document.querySelector("header>a:last-of-type").addEventListener('click', (e)=>{e.preventDefault();move(1);})