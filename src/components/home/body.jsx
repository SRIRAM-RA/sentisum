import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import {connect} from 'react-redux';
import { createRef } from "react";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";


class Body1 extends Component{

    constructor(){
        super()

        this.state = {
            zendesk : [],
            intercom : [],
            values: [],
            sidebar: false,
        }
        
        this.handleClickout1 = this.handleClickout1.bind(this)
        this.applyfilter = this.applyfilter.bind(this)
    }

    showsidebar = () =>{
        this.setState({
            sidebar: true
        })
    }

    theme = createRef()

 
    addfilter = () =>{
        var menu =document.getElementById('menu')
            menu.classList.remove('hidden')
    }

    tagvalues = (e) =>{
        this.setState({values: []})
        if(e.target.id === 'sentisumtagsupdate'){
            if(document.getElementById('tagmenu').classList.contains('hidden')){
                document.getElementById('tagmenu').classList.remove('hidden')
            }else{
                document.getElementById('tagmenu').classList.add('hidden')
            }
        }
        else if(e.target.id === 'diytagsupdate'){
            if(document.getElementById('tagmenu1').classList.contains('hidden')){
                document.getElementById('tagmenu1').classList.remove('hidden')
            }else{
                document.getElementById('tagmenu1').classList.add('hidden')
            }
        }
        else if(e.target.id === 'tickettagsupdate'){
            if(document.getElementById('tagmenu2').classList.contains('hidden')){
                document.getElementById('tagmenu2').classList.remove('hidden')
            }else{
                document.getElementById('tagmenu2').classList.add('hidden')
            }
        }
        else if(e.target.id === 'articletagsupdate'){
            if(document.getElementById('tagmenu3').classList.contains('hidden')){
                document.getElementById('tagmenu3').classList.remove('hidden')
            }else{
                document.getElementById('tagmenu3').classList.add('hidden')
            }
        }
        else if(e.target.id === 'channeltagsupdate'){
            if(document.getElementById('tagmenu4').classList.contains('hidden')){
                document.getElementById('tagmenu4').classList.remove('hidden')
            }else{
                document.getElementById('tagmenu4').classList.add('hidden')
            }
        }
        else if(e.target.id === 'intersentisumtagsupdate'){
            if(document.getElementById('tagmenu5').classList.contains('hidden')){
                document.getElementById('tagmenu5').classList.remove('hidden')
            }else{
                document.getElementById('tagmenu5').classList.add('hidden')
            }
        }
        else if(e.target.id === 'interdiytagsupdate'){
            if(document.getElementById('tagmenu6').classList.contains('hidden')){
                document.getElementById('tagmenu6').classList.remove('hidden')
            }else{
                document.getElementById('tagmenu6').classList.add('hidden')
            }
        }
        else if(e.target.id === 'intertickettagsupdate'){
            if(document.getElementById('tagmenu7').classList.contains('hidden')){
                document.getElementById('tagmenu7').classList.remove('hidden')
            }else{
                document.getElementById('tagmenu7').classList.add('hidden')
            }
        }
        else if(e.target.id === 'interarticletagsupdate'){
            if(document.getElementById('tagmenu8').classList.contains('hidden')){
                document.getElementById('tagmenu8').classList.remove('hidden')
            }else{
                document.getElementById('tagmenu8').classList.add('hidden')
            }
        }
        else if(e.target.id === 'interchanneltagsupdate'){
            if(document.getElementById('tagmenu9').classList.contains('hidden')){
                document.getElementById('tagmenu9').classList.remove('hidden')
            }else{
                document.getElementById('tagmenu9').classList.add('hidden')
            }
        }
    }

    applyallfilter = () =>{

        let zencategory = document.getElementById('zendesk-category')
        let intercategory = document.getElementById('intercom-category')
        if(zencategory.classList.contains('zen-active')){
            this.setState({
                zendesk:[...this.state.zendesk,' ']
            })
            let all = document.getElementById('zen')
            let children = all.querySelectorAll('.filterall')
            for(let i=0; i<children.length; i++){
                children[i].classList.remove('hidden');
            }
            if(this.state.intercom.length !== 0){
                document.getElementById('divider').classList.remove("hidden")
            }
        }else if(intercategory.classList.contains('inter-active')){
            if(this.state.zendesk.length !== 0){
                document.getElementById('divider').classList.remove("hidden")
            }this.setState({
                intercom:[...this.state.intercom,' ']
            })
            let all = document.getElementById('intercom')
            let children = all.querySelectorAll('.filterallinter')
            for(let i=0; i<children.length; i++){
                children[i].classList.remove('hidden');
            }
            
        }
    }

    applyfilter = (e) =>{
        var id = parseInt(e.target.id)
        let zencategory = document.getElementById('zendesk-category')
        let intercategory = document.getElementById('intercom-category')

        if(zencategory.classList.contains('zen-active')){
            if(this.state.intercom.length !== 0){
                document.getElementById('divider').classList.remove("hidden")
            }
            document.getElementById('Zendesk').classList.remove('hidden')
            if(id===1){
                let element = document.getElementById('sentisum')
                if(!this.state.zendesk.includes('sentisum')){
                    this.setState({
                        zendesk:[...this.state.zendesk, element.id]
                    })
                }
                if(this.state.zendesk.length === 0){
                    if (element.classList.contains('hidden')){
                        element.classList.remove('hidden')
                    }
                }else{
                    if (element.classList.contains('hidden')){
                        let and = document.getElementById('diyy')
                        and.classList.remove('hidden')
                        element.classList.remove('hidden')
                    }
                }
            }else if(id === 2){
                let element = document.getElementById('diy')
                if(!this.state.zendesk.includes('diy')){
                    this.setState({
                        zendesk:[...this.state.zendesk, element.id]
                    })
                }
                if(this.state.zendesk.length === 0){
                    if (element.classList.contains('hidden')){
                        element.classList.remove('hidden')
                    }
                }else{
                    if (element.classList.contains('hidden')){
                        let and = document.getElementById('diyy')
                        and.classList.remove('hidden')
                        element.classList.remove('hidden')
                    }
                }
            }else if(id === 3){
                let element = document.getElementById('ticket')
                if(!this.state.zendesk.includes('ticket')){
                    this.setState({
                        zendesk:[...this.state.zendesk, element.id]
                    })
                }
                if(this.state.zendesk.length === 0){
                    if (element.classList.contains('hidden')){
                        element.classList.remove('hidden')
                    }
                }else{
                    if (element.classList.contains('hidden')){
                        let and = document.getElementById('tick')
                        and.classList.remove('hidden')
                        element.classList.remove('hidden')
                    }
                }
            }else if(id===4){
                let element = document.getElementById('article')
                if(!this.state.zendesk.includes('article')){
                    this.setState({
                        zendesk:[...this.state.zendesk, element.id]
                    })
                }
                if(this.state.zendesk.length === 0){
                    if (element.classList.contains('hidden')){
                        element.classList.remove('hidden')
                    }
                }else{
                    if (element.classList.contains('hidden')){
                        let and = document.getElementById('arti')
                        and.classList.remove('hidden')
                        element.classList.remove('hidden')
                    }
                }
            }else if(id===5){
                let element = document.getElementById('channel')
                if(!this.state.zendesk.includes('channel')){
                    this.setState({
                        zendesk:[...this.state.zendesk, element.id]
                    })
                }
                if (element.classList.contains('hidden')){
                    let and = document.getElementById('chan')
                    and.classList.remove('hidden')
                    element.classList.remove('hidden')
                }
            }    
        }else if(intercategory.classList.contains('inter-active')){
            if(this.state.zendesk.length !== 0){
                document.getElementById('divider').classList.remove("hidden")
            }
            document.getElementById('Intercom').classList.remove('hidden')
            if(id===1){
                let element = document.getElementById('inter-sentisum')
                if(!this.state.zendesk.includes('inter-sentisum')){
                    this.setState({
                        intercom:[...this.state.intercom, element.id]
                    })
                }
                if(this.state.intercom.length === 0){
                    if (element.classList.contains('hidden')){
                        element.classList.remove('hidden')
                    }
                }else{
                    if (element.classList.contains('hidden')){
                        let and = document.getElementById('inter-diyy')
                        and.classList.remove('hidden')
                        element.classList.remove('hidden')
                    }
                }
            }else if(id === 2){
                let element = document.getElementById('inter-diy')
                if(!this.state.zendesk.includes('inter-diy')){
                    this.setState({
                        intercom:[...this.state.intercom, element.id]
                    })
                }
                if(this.state.intercom.length === 0){
                    if (element.classList.contains('hidden')){
                        element.classList.remove('hidden')
                    }
                }else{
                    if (element.classList.contains('hidden')){
                        let and = document.getElementById('inter-diyy')
                        and.classList.remove('hidden')
                        element.classList.remove('hidden')
                    }
                }
            }else if(id === 3){
                let element = document.getElementById('inter-ticket')
                if(!this.state.zendesk.includes('inter-ticket')){
                    this.setState({
                        intercom:[...this.state.intercom, element.id]
                    })
                }
                if(this.state.intercom.length === 0){
                    if (element.classList.contains('hidden')){
                        element.classList.remove('hidden')
                    }
                }else{
                    if (element.classList.contains('hidden')){
                        let and = document.getElementById('inter-tick')
                        and.classList.remove('hidden')
                        element.classList.remove('hidden')
                    }
                }
            }else if(id===4){
                let element = document.getElementById('inter-article')
                if(!this.state.zendesk.includes('inter-article')){
                    this.setState({
                        intercom:[...this.state.intercom, element.id]
                    })
                }
                if(this.state.intercom.length === 0){
                    if (element.classList.contains('hidden')){
                        element.classList.remove('hidden')
                    }
                }else{
                    if (element.classList.contains('hidden')){
                        let and = document.getElementById('inter-arti')
                        and.classList.remove('hidden')
                        element.classList.remove('hidden')
                    }
                }
            }else if(id===5){
                let element = document.getElementById('inter-channel')
                if(!this.state.zendesk.includes('inter-channel')){
                    this.setState({
                        intercom:[...this.state.intercom, element.id]
                    })
                }
                if (element.classList.contains('hidden')){
                    let and = document.getElementById('inter-chan')
                    and.classList.remove('hidden')
                    element.classList.remove('hidden')
                }
            }  
        }
    }

    updatestate = (e) =>{
        if(!this.state.values.includes(e.target.value)){
            this.setState({values : [...this.state.values, e.target.value]})
        }else{
            const filter = this.state.values.filter(values => {
                return values !== e.target.value
            })

            this.setState({
                values : [...filter]
            })
        }
    }

    selectcategory = (e) =>{
        let id = e.target.id
        let category = document.getElementById(e.target.id)
        if(id === "zendesk-category"){
            if(category.classList.contains('zen-active')){
                category.classList.remove('zen-active')
            }else{
                category.classList.add('zen-active')
                document.getElementById('intercom-category').classList.remove('inter-active')
                document.getElementById('filter-reveal').classList.remove('hidden')
            }
        }else if(id === 'intercom-category'){
            if(category.classList.contains('inter-active')){
                category.classList.remove('inter-active')
            }else{
                category.classList.add('inter-active')
                document.getElementById('zendesk-category').classList.remove('zen-active')
                document.getElementById('filter-reveal').classList.remove('hidden')
            }
        }
    }

    displaytags = (e) =>{
        let div = document.getElementById(e.target.id)
        if(this.state.values.length === 0){
            window.alert("Select some Tags...")
        }else{
            if(div.id == "sentitags"){
                document.getElementById('tagmenu').classList.add('hidden')
                let h4tag = document.getElementById('sentivalues')
                h4tag.classList.remove('hidden')
                document.getElementById('111').classList.add('hidden')
                this.state.values.sort()
                if(this.state.values.length > 3){
                    for(let i=0; i<3; i++){
                        if(i!=0){
                            h4tag.innerHTML = h4tag.innerHTML+ ', ' +this.state.values[i]
                        }else{
                            h4tag.innerHTML += this.state.values[i]
                        }
                    }
                    h4tag.innerHTML = h4tag.innerHTML + ` or ${parseInt(this.state.values.length - 3)} more` 
                }else{
                    for(let i=0; i<this.state.values.length; i++){
                        if(i!=0){
                            h4tag.innerHTML = h4tag.innerHTML+ ', ' +this.state.values[i]
                        }else{
                            h4tag.innerHTML += this.state.values[i]
                        }
                    }
                }
            }
            else if(div.id == "diytags"){
                document.getElementById('tagmenu1').classList.add('hidden')
                let h4tag = document.getElementById('diyvalues')
                h4tag.classList.remove('hidden')
                document.getElementById('112').classList.add('hidden')
                this.state.values.sort()
                if(this.state.values.length > 3){
                    for(let i=0; i<3; i++){
                        if(i!=0){
                            h4tag.innerHTML = h4tag.innerHTML+ ', ' +this.state.values[i]
                        }else{
                            h4tag.innerHTML += this.state.values[i]
                        }
                    }
                    h4tag.innerHTML = h4tag.innerHTML + ` or ${parseInt(this.state.values.length - 3)} more` 
                }else{
                    for(let i=0; i<this.state.values.length; i++){
                        if(i!=0){
                            h4tag.innerHTML = h4tag.innerHTML+ ', ' +this.state.values[i]
                        }else{
                            h4tag.innerHTML += this.state.values[i]
                        }
                    }
                }
            }
            else if(div.id == "ticketidtags"){
                document.getElementById('tagmenu2').classList.add('hidden')
                let h4tag = document.getElementById('ticketidvalues')
                h4tag.classList.remove('hidden')
                document.getElementById('113').classList.add('hidden')
                this.state.values.sort()
                if(this.state.values.length > 3){
                    for(let i=0; i<3; i++){
                        if(i!=0){
                            h4tag.innerHTML = h4tag.innerHTML+ ', ' +this.state.values[i]
                        }else{
                            h4tag.innerHTML += this.state.values[i]
                        }
                    }
                    h4tag.innerHTML = h4tag.innerHTML + ` or ${parseInt(this.state.values.length - 3)} more` 
                }else{
                    for(let i=0; i<this.state.values.length; i++){
                        if(i!=0){
                            h4tag.innerHTML = h4tag.innerHTML+ ', ' +this.state.values[i]
                        }else{
                            h4tag.innerHTML += this.state.values[i]
                        }
                    }
                }
            }
            else if(div.id == "articletags"){
                document.getElementById('tagmenu3').classList.add('hidden')
                let h4tag = document.getElementById('articlevalues')
                h4tag.classList.remove('hidden')
                document.getElementById('114').classList.add('hidden')
                this.state.values.sort()
                if(this.state.values.length > 3){
                    for(let i=0; i<3; i++){
                        if(i!=0){
                            h4tag.innerHTML = h4tag.innerHTML+ ', ' +this.state.values[i]
                        }else{
                            h4tag.innerHTML += this.state.values[i]
                        }
                    }
                    h4tag.innerHTML = h4tag.innerHTML + ` or ${parseInt(this.state.values.length - 3)} more` 
                }else{
                    for(let i=0; i<this.state.values.length; i++){
                        if(i!=0){
                            h4tag.innerHTML = h4tag.innerHTML+ ', ' +this.state.values[i]
                        }else{
                            h4tag.innerHTML += this.state.values[i]
                        }
                    }
                }
            }
            else if(div.id == "channeltags"){
                document.getElementById('tagmenu4').classList.add('hidden')
                let h4tag = document.getElementById('channelvalues')
                h4tag.classList.remove('hidden')
                document.getElementById('115').classList.add('hidden')
                this.state.values.sort()
                if(this.state.values.length > 3){
                    for(let i=0; i<3; i++){
                        if(i!=0){
                            h4tag.innerHTML = h4tag.innerHTML+ ', ' +this.state.values[i]
                        }else{
                            h4tag.innerHTML += this.state.values[i]
                        }
                    }
                    h4tag.innerHTML = h4tag.innerHTML + ` or ${parseInt(this.state.values.length - 3)} more` 
                }else{
                    for(let i=0; i<this.state.values.length; i++){
                        if(i!=0){
                            h4tag.innerHTML = h4tag.innerHTML+ ', ' +this.state.values[i]
                        }else{
                            h4tag.innerHTML += this.state.values[i]
                        }
                    }
                }
            }
            else if(div.id == "intersentitags"){
                document.getElementById('tagmenu5').classList.add('hidden')
                let h4tag = document.getElementById('intersentivalues')
                h4tag.classList.remove('hidden')
                document.getElementById('121').classList.add('hidden')
                this.state.values.sort()
                if(this.state.values.length > 3){
                    for(let i=0; i<3; i++){
                        if(i!=0){
                            h4tag.innerHTML = h4tag.innerHTML+ ', ' +this.state.values[i]
                        }else{
                            h4tag.innerHTML += this.state.values[i]
                        }
                    }
                    h4tag.innerHTML = h4tag.innerHTML + ` or ${parseInt(this.state.values.length - 3)} more` 
                }else{
                    for(let i=0; i<this.state.values.length; i++){
                        if(i!=0){
                            h4tag.innerHTML = h4tag.innerHTML+ ', ' +this.state.values[i]
                        }else{
                            h4tag.innerHTML += this.state.values[i]
                        }
                    }
                }
            }
            else if(div.id == "interdiytags"){
                document.getElementById('tagmenu6').classList.add('hidden')
                let h4tag = document.getElementById('interdiyvalues')
                h4tag.classList.remove('hidden')
                document.getElementById('122').classList.add('hidden')
                this.state.values.sort()
                if(this.state.values.length > 3){
                    for(let i=0; i<3; i++){
                        if(i!=0){
                            h4tag.innerHTML = h4tag.innerHTML+ ', ' +this.state.values[i]
                        }else{
                            h4tag.innerHTML += this.state.values[i]
                        }
                    }
                    h4tag.innerHTML = h4tag.innerHTML + ` or ${parseInt(this.state.values.length - 3)} more` 
                }else{
                    for(let i=0; i<this.state.values.length; i++){
                        if(i!=0){
                            h4tag.innerHTML = h4tag.innerHTML+ ', ' +this.state.values[i]
                        }else{
                            h4tag.innerHTML += this.state.values[i]
                        }
                    }
                }
            }
            else if(div.id == "intertickettags"){
                document.getElementById('tagmenu7').classList.add('hidden')
                let h4tag = document.getElementById('interticketvalues')
                h4tag.classList.remove('hidden')
                document.getElementById('123').classList.add('hidden')
                this.state.values.sort()
                if(this.state.values.length > 3){
                    for(let i=0; i<3; i++){
                        if(i!=0){
                            h4tag.innerHTML = h4tag.innerHTML+ ', ' +this.state.values[i]
                        }else{
                            h4tag.innerHTML += this.state.values[i]
                        }
                    }
                    h4tag.innerHTML = h4tag.innerHTML + ` or ${parseInt(this.state.values.length - 3)} more` 
                }else{
                    for(let i=0; i<this.state.values.length; i++){
                        if(i!=0){
                            h4tag.innerHTML = h4tag.innerHTML+ ', ' +this.state.values[i]
                        }else{
                            h4tag.innerHTML += this.state.values[i]
                        }
                    }
                }
            }
            else if(div.id == "interarticletags"){
                document.getElementById('tagmenu8').classList.add('hidden')
                let h4tag = document.getElementById('interarticlevalues')
                h4tag.classList.remove('hidden')
                document.getElementById('124').classList.add('hidden')
                this.state.values.sort()
                if(this.state.values.length > 3){
                    for(let i=0; i<3; i++){
                        if(i!=0){
                            h4tag.innerHTML = h4tag.innerHTML+ ', ' +this.state.values[i]
                        }else{
                            h4tag.innerHTML += this.state.values[i]
                        }
                    }
                    h4tag.innerHTML = h4tag.innerHTML + ` or ${parseInt(this.state.values.length - 3)} more` 
                }else{
                    for(let i=0; i<this.state.values.length; i++){
                        if(i!=0){
                            h4tag.innerHTML = h4tag.innerHTML+ ', ' +this.state.values[i]
                        }else{
                            h4tag.innerHTML += this.state.values[i]
                        }
                    }
                }
            }
            else if(div.id == "interchanneltags"){
                document.getElementById('tagmenu9').classList.add('hidden')
                let h4tag = document.getElementById('interchannelvalues')
                h4tag.classList.remove('hidden')
                document.getElementById('125').classList.add('hidden')
                this.state.values.sort()
                if(this.state.values.length > 3){
                    for(let i=0; i<3; i++){
                        if(i!=0){
                            h4tag.innerHTML = h4tag.innerHTML+ ', ' +this.state.values[i]
                        }else{
                            h4tag.innerHTML += this.state.values[i]
                        }
                    }
                    h4tag.innerHTML = h4tag.innerHTML + ` or ${parseInt(this.state.values.length - 3)} more` 
                }else{
                    for(let i=0; i<this.state.values.length; i++){
                        if(i!=0){
                            h4tag.innerHTML = h4tag.innerHTML+ ', ' +this.state.values[i]
                        }else{
                            h4tag.innerHTML += this.state.values[i]
                        }
                    }
                }
            }
        }
    }

    selectall = (e) =>{
        if(e.target.id === 'sentiselect'){
            let arr = []
            let checkboxes = document.querySelector("#sentiselect")
            let checkopts = document.querySelectorAll('.sentiselect') 
            const isChecked = checkboxes.checked
            if(isChecked == false){
                this.setState({values: []})
                for(let i=0; i<checkopts.length ; i++){
                    checkopts[i].checked = isChecked
                }
            }else{
                for(let i=0; i<checkopts.length ; i++){
                    checkopts[i].checked = isChecked
                    arr.push(checkopts[i].value)
                }
                this.setState({
                    values: [...this.state.values, ...arr]
                })
            }
        }else if(e.target.id === 'diyselect'){
            let arr = []
            let checkboxes = document.querySelector("#diyselect")
            let checkopts = document.querySelectorAll('.diyselect') 
            const isChecked = checkboxes.checked
            if(isChecked == false){
                this.setState({values: []})
                for(let i=0; i<checkopts.length ; i++){
                    checkopts[i].checked = isChecked
                }
            }else{
                for(let i=0; i<checkopts.length ; i++){
                    checkopts[i].checked = isChecked
                    arr.push(checkopts[i].value)
                }
                this.setState({
                    values: [...this.state.values, ...arr]
                })
            }
        }else if(e.target.id === 'ticketselect'){
            let arr = []
            let checkboxes = document.querySelector("#ticketselect")
            let checkopts = document.querySelectorAll('.ticketselect') 
            const isChecked = checkboxes.checked
            if(isChecked == false){
                this.setState({values: []})
                for(let i=0; i<checkopts.length ; i++){
                    checkopts[i].checked = isChecked
                }
            }else{
                for(let i=0; i<checkopts.length ; i++){
                    checkopts[i].checked = isChecked
                    arr.push(checkopts[i].value)
                }
                this.setState({
                    values: [...this.state.values, ...arr]
                })
            }
        }else if(e.target.id === 'articleselect'){
            let arr = []
            let checkboxes = document.querySelector("#articleselect")
            let checkopts = document.querySelectorAll('.articleselect') 
            const isChecked = checkboxes.checked
            if(isChecked == false){
                this.setState({values: []})
                for(let i=0; i<checkopts.length ; i++){
                    checkopts[i].checked = isChecked
                }
            }else{
                for(let i=0; i<checkopts.length ; i++){
                    checkopts[i].checked = isChecked
                    arr.push(checkopts[i].value)
                }
                this.setState({
                    values: [...this.state.values, ...arr]
                })
            }
        }else if(e.target.id === 'channelselect'){
            let arr = []
            let checkboxes = document.querySelector("#channelselect")
            let checkopts = document.querySelectorAll('.channelselect') 
            const isChecked = checkboxes.checked
            if(isChecked == false){
                this.setState({values: []})
                for(let i=0; i<checkopts.length ; i++){
                    checkopts[i].checked = isChecked
                }
            }else{
                for(let i=0; i<checkopts.length ; i++){
                    checkopts[i].checked = isChecked
                    arr.push(checkopts[i].value)
                }
                this.setState({
                    values: [...this.state.values, ...arr]
                })
            }
        }
        else if(e.target.id === 'intersentiselect'){
            let arr = []
            let checkboxes = document.querySelector("#intersentiselect")
            let checkopts = document.querySelectorAll('.intersentiselect') 
            const isChecked = checkboxes.checked
            if(isChecked == false){
                this.setState({values: []})
                for(let i=0; i<checkopts.length ; i++){
                    checkopts[i].checked = isChecked
                }
            }else{
                for(let i=0; i<checkopts.length ; i++){
                    checkopts[i].checked = isChecked
                    arr.push(checkopts[i].value)
                }
                this.setState({
                    values: [...this.state.values, ...arr]
                })
            }
        }else if(e.target.id === 'interdiyselect'){
            let arr = []
            let checkboxes = document.querySelector("#interdiyselect")
            let checkopts = document.querySelectorAll('.interdiyselect') 
            const isChecked = checkboxes.checked
            if(isChecked == false){
                this.setState({values: []})
                for(let i=0; i<checkopts.length ; i++){
                    checkopts[i].checked = isChecked
                }
            }else{
                for(let i=0; i<checkopts.length ; i++){
                    checkopts[i].checked = isChecked
                    arr.push(checkopts[i].value)
                }
                this.setState({
                    values: [...this.state.values, ...arr]
                })
            }
        }else if(e.target.id === 'interticketselect'){
            let arr = []
            let checkboxes = document.querySelector("#interticketselect")
            let checkopts = document.querySelectorAll('.interticketselect') 
            const isChecked = checkboxes.checked
            if(isChecked == false){
                this.setState({values: []})
                for(let i=0; i<checkopts.length ; i++){
                    checkopts[i].checked = isChecked
                }
            }else{
                for(let i=0; i<checkopts.length ; i++){
                    checkopts[i].checked = isChecked
                    arr.push(checkopts[i].value)
                }
                this.setState({
                    values: [...this.state.values, ...arr]
                })
            }
        }else if(e.target.id === 'interarticleselect'){
            let arr = []
            let checkboxes = document.querySelector("#interarticleselect")
            let checkopts = document.querySelectorAll('.interarticleselect') 
            const isChecked = checkboxes.checked
            if(isChecked == false){
                this.setState({values: []})
                for(let i=0; i<checkopts.length ; i++){
                    checkopts[i].checked = isChecked
                }
            }else{
                for(let i=0; i<checkopts.length ; i++){
                    checkopts[i].checked = isChecked
                    arr.push(checkopts[i].value)
                }
                this.setState({
                    values: [...this.state.values, ...arr]
                })
            }
        }else if(e.target.id === 'interchannelselect'){
            let arr = []
            let checkboxes = document.querySelector("#interchannelselect")
            let checkopts = document.querySelectorAll('.interchannelselect') 
            const isChecked = checkboxes.checked
            if(isChecked == false){
                this.setState({values: []})
                for(let i=0; i<checkopts.length ; i++){
                    checkopts[i].checked = isChecked
                }
            }else{
                for(let i=0; i<checkopts.length ; i++){
                    checkopts[i].checked = isChecked
                    arr.push(checkopts[i].value)
                }
                this.setState({
                    values: [...this.state.values, ...arr]
                })
            }
        }
    }

    closesidebar = () =>{
        this.setState({
            sidebar: false
        })
    }
    wrapperRef = createRef()

    componentDidMount(){
        document.addEventListener("mousedown", this.handleClickout1)
    }

    componentWillUnmount(){
        document.removeEventListener("mousedown", this.handleClickout1)
    }
    
    handleClickout1 = (event) => {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
                document.getElementById("menu").classList.add('hidden')
        }
    }

    render(){

        return(
            <div className="outer-box">
                <div className={this.state.sidebar ? "inner-box1 show grow" : "inner-box1 grow"}>
                    <button type="button" ><label ><img src="./images/cross.gif" className="gif1" onClick={this.closesidebar}/></label></button>
                    <div className="filter-inner-box1">
                        <h3>Filters</h3>
                        <div>
                            {/* <button type="button" onClick={this.clearfilter} className="add-filter"><FontAwesomeIcon icon={faClose}/>&nbsp;Clear<span className="tooltip">Clear Filters</span></button> */}
                            <button type="button" id="dropdownDefault"  onClick={this.addfilter} className="add-filter"><FontAwesomeIcon icon={faPlus}/>&nbsp;Add filter<span className="tooltip">Apply Filters</span></button>
                        </div>
                        <div id="menu" ref={this.wrapperRef} className="hidden lg:w-11/12 flex flex-col bg-white shadow-2xl rounded-xl absolute top-11 transition-all">
                            <div className="flex flex-row w-full px-1">
                                <div className="w-6/12 pt-4 pb-2 px-1">
                                    <button type="submit" className="text-xs px-1 pb-1.5 pt-1.5 rounded font-medium tabs-color" id="zendesk-category" onClick={this.selectcategory.bind(this)}>ZENDESK</button>
                                </div>
                                <div className="w-6/12 pt-4 pb-2 px-1">
                                    <button type="button" className="text-xs px-1 pb-1.5 pt-1.5 rounded font-medium tabs-color1"  id="intercom-category" onClick={this.selectcategory.bind(this)}>INTERCOM</button>
                                </div>
                            </div>
                            <div className="hidden" id="filter-reveal">
                                <div className="px-2 py-3"><input type="search" placeholder="Search filter" className="w-full rounded-lg text-xs font-medium px-3 py-3 focus:ring-0" /></div>
                                <p className="px-5 py-3 hover:bg-red-400 hover:text-white hover:rounded-xl transition-all delay-5" onClick={this.applyallfilter}>All</p>
                                {this.props.filtertags.map((tags, index)=>{
                                    return(
                                        <p className="px-5 py-3 hover:bg-red-400 hover:text-white hover:rounded-xl transition-all delay-5" key={tags.id} id={index+1} value={tags.tag} onClick={this.applyfilter.bind(this)}>{tags.tag}</p>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="filter-inner-box2 overflow-auto grow">
                        <div className="filter-apply-before" id="no-filter">
                            {/* <svg width="50" height="67" viewBox="0 0 29 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28.5998 1.93044C28.8642 2.0101 29.0139 2.28903 28.9343 2.55343L27.636 6.86209C27.5564 7.12649 27.2774 7.27624 27.013 7.19658C26.7486 7.11691 26.5989 6.83799 26.6785 6.57358L27.8325 2.74367L24.0026 1.58966C23.7382 1.51 23.5885 1.23107 23.6681 0.966675C23.7478 0.702272 24.0267 0.552516 24.2911 0.632184L28.5998 1.93044ZM1.18129 60.1157C-0.683092 46.6193 0.62712 34.9995 5.14315 25.2843C9.6612 15.5647 17.368 7.79469 28.219 1.96866L28.6921 2.8497C18.0008 8.58993 10.4632 16.2116 6.04997 25.7058C1.63467 35.2043 0.326546 46.6204 2.17189 59.9788L1.18129 60.1157Z" fill="#FAC0B5"/>
                            </svg> */}
                            <h3 id="h31">No filters applied</h3>
                            <h3 id="h32">Apply filters or select a view</h3>
                            <img src="/images/Group 79087.png" alt="no filter" id="nofilter"/>
                            <div className="tutorial">
                                <img src="./images/circle.png" alt="circle"/>
                                <h3>Quick tutorial of filters</h3>
                            </div>
                        </div>
                        <div className="filter-apply-after flex flex-col grow" id="after-filter">
                            <div id="zen">
                                <React.Fragment>
                                    <h3 className="hidden text-xs px-1 pb-1.5 pt-1.5 rounded font-medium text-center tabs-color zen-active filterall" id="Zendesk">ZENDESK</h3>
                                    <div className="hidden flex flex-col shadow-md rounded-xl filterall  filterresponsive" id='sentisum'>
                                        <h3 className="text-left md:text-xs lg:text-base transition-all font-family py-1.5">Sentisum Tag &nbsp; <span className="lg:text-sm md:text-xs transition-all font-light">is</span></h3>
                                        <div className="py-1.5" id="111"><button type="button" className="w-full rounded-lg md:text-xs lg:text-sm font-light px-3 py-3 focus:text-current text-left search-filter-box" id="sentisumtagsupdate" onClick={this.tagvalues.bind(this)}>Search Value</button></div>
                                        <div id="tagmenu" className="hidden px-3 py-2 flex flex-col bg-white shadow-2xl rounded-xl tagvaluescroll" ref={this.slider}>
                                            <div className="flex flex-col px-1 py-2 tagvalues">
                                                    <div className="px-2 py-3"><input type="search" placeholder="Search filter" className="w-full rounded-lg text-xs font-medium px-3 py-3 focus:ring-0" /></div>
                                                    <label className="flex flex-row px-2 py-3 items-center checkcontainer" htmlFor="sentiselect"><input type="checkbox" className="px-1 py-1 rounded checkbox-style"  id="sentiselect"  onChange={this.selectall.bind(this)} /><span className="checkmark">&emsp;Select All</span></label>
                                                    {this.props.values.map((values, index)=>{
                                                        return(
                                                            <label className="flex flex-row px-2 py-3 items-center checkcontainer">
                                                                <input type="checkbox" className="px-1 py-1 rounded checkbox-style sentiselect" id={index+1} value={values.value} onChange={this.updatestate} /><span className="checkmark">&emsp;{values.value}</span>
                                                            </label>
                                                        )
                                                    })}
                                            </div>
                                            <button type="button" className="w-full py-2 rounded-lg px-3 text-sm items-center text-white font-bold apply-filter-btn" id="sentitags" onClick={this.displaytags}>Apply</button>
                                        </div>
                                        <h4 className="hidden py-0.5 flex-wrap tagresponsive" id="sentivalues"></h4>
                                    </div>
                                    <h3 className="hidden pt-3 font-medium font-family text-zinc-400 text-xs filterall" id="diyy">AND</h3>
                                    <div className="hidden flex flex-col shadow-md rounded-xl filterall filterresponsive" id='diy'>
                                        <h3 className="text-left md:text-sm lg:text-base transition-all font-family py-1.5">DIY Tags &nbsp; <span className="lg:text-sm md:text-xs transition-all font-light">is</span></h3>
                                        <div className="py-1.5" id='112'><button type="button" className="w-full rounded-lg md:text-xs lg:text-sm font-light px-3 py-3 focus:text-current text-left search-filter-box" id="diytagsupdate" onClick={this.tagvalues.bind(this)}>Search Value</button></div>                                        
                                        <div id="tagmenu1" className="hidden  px-3 py-2 flex flex-col bg-white shadow-2xl rounded-xl tagvaluescroll" ref={this.slider}>
                                            <div className="flex flex-col px-1 py-2 tagvalues">
                                                    <div className="px-2 py-3"><input type="search" placeholder="Search filter" className="w-full rounded-lg text-xs font-medium px-3 py-3 focus:ring-0" /></div>
                                                    <label className="flex flex-row px-2 py-3 items-center checkcontainer" htmlFor="diyselect"><input type="checkbox" className="px-1 py-1 rounded checkbox-style"  id="diyselect"  onChange={this.selectall.bind(this)} /><span className="checkmark">&emsp;Select All</span></label>
                                                    {this.props.values.map((values, index)=>{
                                                        return(
                                                            <label className="flex flex-row px-2 py-3 items-center checkcontainer">
                                                                <input type="checkbox" className="px-1 py-1 rounded checkbox-style diyselect" id={index+1} value={values.value} onChange={this.updatestate} /><span className="checkmark">&emsp;{values.value}</span>
                                                            </label>
                                                        )
                                                    })}
                                            </div>
                                            <button type="button" className="w-full py-2 rounded-lg px-3 text-sm items-center text-white font-bold apply-filter-btn" id="diytags" onClick={this.displaytags}>Apply</button>
                                        </div>
                                        <h4 className="hidden tagresponsive py-0.5 flex-wrap" id="diyvalues"></h4>
                                    </div>
                                    <h3 className="hidden pt-3 font-medium font-family text-zinc-400 text-xs filterall" id="tick">AND</h3>
                                    <div className="hidden flex flex-col shadow-md rounded-xl filterall  filterresponsive" id='ticket'>
                                        <h3 className="text-left md:text-sm lg:text-base transition-all font-family py-1.5">Ticket ID &nbsp; <span className="lg:text-sm md:text-xs transition-all font-light">is</span></h3>
                                        <div className="py-1.5" id='113'><button type="button" className="w-full rounded-lg md:text-xs lg:text-sm font-light px-3 py-3 focus:text-current text-left search-filter-box" id="tickettagsupdate" onClick={this.tagvalues.bind(this)}>Search Value</button></div>                                        
                                        <div id="tagmenu2" className="hidden px-3 py-2 flex flex-col bg-white shadow-2xl rounded-xl tagvaluescroll" ref={this.slider}>
                                            <div className="flex flex-col px-1 py-2 tagvalues">
                                                    <div className="px-2 py-3"><input type="search" placeholder="Search filter" className="w-full rounded-lg text-xs font-medium px-3 py-3 focus:ring-0" /></div>
                                                    <label className="flex flex-row px-2 py-3 items-center checkcontainer" htmlFor="ticketselect"><input type="checkbox" className="px-1 py-1 rounded checkbox-style"  id="ticketselect"  onChange={this.selectall.bind(this)} /><span className="checkmark">&emsp;Select All</span></label>
                                                    {this.props.values.map((values, index)=>{
                                                        return(
                                                            <label className="flex flex-row px-2 py-3 items-center checkcontainer">
                                                                <input type="checkbox" className="px-1 py-1 rounded checkbox-style ticketselect" id={index+1} value={values.value} onChange={this.updatestate} /><span className="checkmark">&emsp;{values.value}</span>
                                                            </label>
                                                        )
                                                    })}
                                            </div>
                                            <button type="button" className="w-full py-2 rounded-lg px-3 text-sm items-center text-white font-bold apply-filter-btn" id="ticketidtags" onClick={this.displaytags}>Apply</button>
                                        </div>
                                        <h4 className="hidden tagresponsive py-0.5" id="ticketidvalues"></h4>
                                    </div>
                                    <h3 className="hidden pt-3 font-medium font-family text-zinc-400 text-xs filterall" id="arti">AND</h3>
                                    <div className="hidden flex flex-col shadow-md rounded-xl filterall  filterresponsive" id='article'>
                                        <h3 className="text-left md:text-sm lg:text-base transition-all font-family py-1.5">Article Type &nbsp; <span className="lg:text-sm md:text-xs transition-all font-light">is</span></h3>
                                        <div className="py-1.5" id='114'><button type="button" className="w-full rounded-lg md:text-xs lg:text-sm font-light px-3 py-3 focus:text-current text-left search-filter-box" id="articletagsupdate" onClick={this.tagvalues.bind(this)}>Search Value</button></div>                                        
                                        <div id="tagmenu3" className="hidden px-3 py-2 flex flex-col bg-white shadow-2xl rounded-xl tagvaluescroll" ref={this.slider}>
                                            <div className="flex flex-col px-1 py-2 tagvalues">
                                                    <div className="px-2 py-3"><input type="search" placeholder="Search filter" className="w-full rounded-lg text-xs font-medium px-3 py-3 focus:ring-0" /></div>
                                                    <label className="flex flex-row px-2 py-3 items-center checkcontainer" htmlFor="articleselect"><input type="checkbox" className="px-1 py-1 rounded checkbox-style"  id="articleselect"  onChange={this.selectall.bind(this)} /><span className="checkmark">&emsp;Select All</span></label>
                                                    {this.props.values.map((values, index)=>{
                                                        return(
                                                            <label className="flex flex-row px-2 py-3 items-center checkcontainer">
                                                                <input type="checkbox" className="px-1 py-1 rounded checkbox-style articleselect" id={index+1} value={values.value} onChange={this.updatestate} /><span className="checkmark">&emsp;{values.value}</span>
                                                            </label>
                                                        )
                                                    })}
                                            </div>
                                            <button type="button" className="w-full py-2 rounded-lg px-3 text-sm items-center text-white font-bold apply-filter-btn" id="articletags" onClick={this.displaytags}>Apply</button>
                                        </div>
                                        <h4 className="hidden tagresponsive py-0.5" id="articlevalues"></h4>
                                    </div>
                                    <h3 className="hidden pt-3 font-medium font-family text-zinc-400 text-xs filterall" id="chan">AND</h3>
                                    <div className="hidden flex flex-col shadow-md rounded-xl filterall  filterresponsive" id='channel'>
                                        <h3 className="text-left md:text-sm lg:text-base transition-all font-family py-1.5">Channel &nbsp; <span className="lg:text-sm md:text-xs transition-all font-light">is</span></h3>
                                        <div className="py-1.5" id='115'><button type="button" className="w-full rounded-lg md:text-xs lg:text-sm font-light px-3 py-3 focus:text-current text-left search-filter-box" id="channeltagsupdate" onClick={this.tagvalues.bind(this)}>Search Value</button></div>                                        
                                        <div id="tagmenu4" className="hidden px-3 py-2 flex flex-col bg-white shadow-2xl rounded-xl tagvaluescroll" ref={this.slider}>
                                            <div className="flex flex-col px-1 py-2 tagvalues">
                                                    <div className="px-2 py-3"><input type="search" placeholder="Search filter" className="w-full rounded-lg text-xs font-medium px-3 py-3 focus:ring-0" /></div>
                                                    <label className="flex flex-row px-2 py-3 items-center checkcontainer" htmlFor="channelselect"><input type="checkbox" className="px-1 py-1 rounded checkbox-style"  id="channelselect"  onChange={this.selectall.bind(this)} /><span className="checkmark">&emsp;Select All</span></label>
                                                    {this.props.values.map((values, index)=>{
                                                        return(
                                                            <label className="flex flex-row px-2 py-3 items-center checkcontainer">
                                                                <input type="checkbox" className="px-1 py-1 rounded checkbox-style channelselect" id={index+1} value={values.value} onChange={this.updatestate} /><span className="checkmark">&emsp;{values.value}</span>
                                                            </label>
                                                        )
                                                    })}
                                            </div>
                                            <button type="button" className="w-full py-2 rounded-lg px-3 text-sm items-center text-white font-bold apply-filter-btn" id="channeltags" onClick={this.displaytags}>Apply</button>
                                        </div>
                                        <h4 className="hidden tagresponsive py-0.5" id="channelvalues"></h4>
                                    </div>
                                </React.Fragment>
                            </div>
                            <React.Fragment>
                                <div className="hidden flex flex-row py-4 items-center w-full justify-around" id="divider">
                                    <hr className="w-5/12 h-0.5"></hr>
                                    <h3 className="font-family text-xs text-zinc-400">or</h3>
                                    <hr className="w-5/12 h-0.5"></hr>
                                </div>
                                <div id="intercom">
                                    <h3 className="hidden text-xs px-1 pb-1.5 pt-1.5 rounded font-medium text-center tabs-color1 filterallinter inter-active" id="Intercom">INTERCOM</h3>
                                    <div className="hidden flex flex-col shadow-md rounded-xl filterallinter  filterresponsive" id="inter-sentisum">
                                        <h3 className="text-left md:text-sm lg:text-base font-family py-1.5 transition-all">Sentisum Tag &nbsp; <span className="lg:text-sm md:text-xs font-light transition-all">is</span></h3>
                                        <div className="py-1.5" id="121"><button type="button" className="w-full rounded-lg md:text-xs lg:text-sm font-light px-3 py-3 focus:text-current text-left search-filter-box" id="intersentisumtagsupdate" onClick={this.tagvalues.bind(this)}>Search Value</button></div>                                        
                                        <div id="tagmenu5" className="hidden px-3 py-2 flex flex-col bg-white shadow-2xl rounded-xl tagvaluescroll" ref={this.slider}>
                                            <div className="flex flex-col px-1 py-2 tagvalues">
                                                    <div className="px-2 py-3"><input type="search" placeholder="Search filter" className="w-full rounded-lg text-xs font-medium px-3 py-3 focus:ring-0" /></div>
                                                    <label className="flex flex-row px-2 py-3 items-center checkcontainer" htmlFor="intersentiselect"><input type="checkbox" className="px-1 py-1 rounded checkbox-style"  id="intersentiselect"  onChange={this.selectall.bind(this)} /><span className="checkmark">&emsp;Select All</span></label>
                                                    {this.props.values.map((values, index)=>{
                                                        return(
                                                            <label className="flex flex-row px-2 py-3 items-center checkcontainer">
                                                                <input type="checkbox" className="px-1 py-1 rounded checkbox-style intersentiselect" id={index+1} value={values.value} onChange={this.updatestate} /><span className="checkmark">&emsp;{values.value}</span>
                                                            </label>
                                                        )
                                                    })}
                                            </div>
                                            <button type="button" className="w-full py-2 rounded-lg px-3 text-sm items-center text-white font-bold apply-filter-btn" id="intersentitags" onClick={this.displaytags}>Apply</button>
                                        </div>
                                        <h4 className="hidden tagresponsive py-0.5" id="intersentivalues"></h4>
                                    </div>
                                    <h3 className="hidden pt-3 font-medium font-family text-zinc-400 text-xs filterallinter" id="inter-diyy">AND</h3>
                                    <div className="hidden flex flex-col shadow-md rounded-xl filterallinter  filterresponsive" id="inter-diy">
                                        <h3 className="text-left md:text-sm lg:text-base font-family py-1.5">DIY Tags &nbsp; <span className="text-sm font-light">is</span></h3>
                                        <div className="py-1.5" id='122'><button type="button" className="w-full rounded-lg md:text-xs lg:text-sm font-light px-3 py-3 focus:text-current text-left search-filter-box" id="interdiytagsupdate" onClick={this.tagvalues.bind(this)}>Search Value</button></div>                                        
                                        <div id="tagmenu6" className="hidden px-3 py-2 flex flex-col bg-white shadow-2xl rounded-xl tagvaluescroll" ref={this.slider}>
                                            <div className="flex flex-col px-1 py-2 tagvalues">
                                                    <div className="px-2 py-3"><input type="search" placeholder="Search filter" className="w-full rounded-lg text-xs font-medium px-3 py-3 focus:ring-0" /></div>
                                                    <label className="flex flex-row px-2 py-3 items-center checkcontainer" htmlFor="interdiyselect"><input type="checkbox" className="px-1 py-1 rounded checkbox-style"  id="interdiyselect"  onChange={this.selectall.bind(this)} /><span className="checkmark">&emsp;Select All</span></label>
                                                    {this.props.values.map((values, index)=>{
                                                        return(
                                                            <label className="flex flex-row px-2 py-3 items-center checkcontainer">
                                                                <input type="checkbox" className="px-1 py-1 rounded checkbox-style interdiyselect" id={index+1} value={values.value} onChange={this.updatestate} /><span className="checkmark">&emsp;{values.value}</span>
                                                            </label>
                                                        )
                                                    })}
                                            </div>
                                            <button type="button" className="w-full py-2 rounded-lg px-3 text-sm items-center text-white font-bold apply-filter-btn" id="interdiytags" onClick={this.displaytags}>Apply</button>
                                        </div>
                                        <h4 className="hidden tagresponsive py-0.5" id="interdiyvalues"></h4>
                                    </div>
                                    <h3 className="hidden pt-3 font-medium font-family text-zinc-400 text-xs filterallinter" id="inter-tick">AND</h3>
                                    <div className="hidden flex flex-col shadow-md rounded-xl filterallinter  filterresponsive" id="inter-ticket" >
                                        <h3 className="text-left md:text-sm lg:text-base  font-family py-1.5">Ticket ID &nbsp; <span className="lg:text-sm md:text:xs font-light">is</span></h3>
                                        <div className="py-1.5" id="123"><button type="button" className="w-full rounded-lg md:text-xs lg:text-sm font-light px-3 py-3 focus:text-current text-left search-filter-box" id="intertickettagsupdate" onClick={this.tagvalues.bind(this)}>Search Value</button></div>                                        
                                        <div id="tagmenu7" className="hidden px-3 py-2 flex flex-col bg-white shadow-2xl rounded-xl  tagvaluescroll" ref={this.slider}>
                                            <div className="flex flex-col px-1 py-2 tagvalues">
                                                    <div className="px-2 py-3"><input type="search" placeholder="Search filter" className="w-full rounded-lg text-xs font-medium px-3 py-3 focus:ring-0" /></div>
                                                    <label className="flex flex-row px-2 py-3 items-center checkcontainer" htmlFor="interticketselect"><input type="checkbox" className="px-1 py-1 rounded checkbox-style"  id="interticketselect"  onChange={this.selectall.bind(this)} /><span className="checkmark">&emsp;Select All</span></label>
                                                    {this.props.values.map((values, index)=>{
                                                        return(
                                                            <label className="flex flex-row px-2 py-3 items-center checkcontainer">
                                                                <input type="checkbox" className="px-1 py-1 rounded checkbox-style interticketselect" id={index+1} value={values.value} onChange={this.updatestate} /><span className="checkmark">&emsp;{values.value}</span>
                                                            </label>
                                                        )
                                                    })}
                                            </div>
                                            <button type="button" className="w-full py-2 rounded-lg px-3 text-sm items-center text-white font-bold apply-filter-btn" id="intertickettags" onClick={this.displaytags}>Apply</button>
                                        </div>
                                        <h4 className="hidden tagresponsive py-0.5" id="interticketvalues"></h4>
                                    </div>
                                    <h3 className="hidden pt-3 font-medium font-family text-zinc-400 text-xs filterallinter" id="inter-arti">AND</h3>
                                    <div className="hidden flex flex-col shadow-md rounded-xl filterallinter  filterresponsive" id="inter-article">
                                        <h3 className="text-left md:text-sm lg:text-base font-family py-1.5">Article Type &nbsp; <span className="lg:text-sm md:text-xs font-light">is</span></h3>
                                        <div className="py-1.5" id="124"><button type="button" className="w-full rounded-lg md:text-xs lg:text-sm font-light px-3 py-3 focus:text-current text-left search-filter-box" id="interarticletagsupdate" onClick={this.tagvalues.bind(this)}>Search Value</button></div>                                        
                                        <div id="tagmenu8" className="hidden px-3 py-2 flex flex-col bg-white shadow-2xl rounded-xl tagvaluescroll" ref={this.slider}>
                                            <div className="flex flex-col px-1 py-2 tagvalues">
                                                    <div className="px-2 py-3"><input type="search" placeholder="Search filter" className="w-full rounded-lg text-xs font-medium px-3 py-3 focus:ring-0" /></div>
                                                    <label className="flex flex-row px-2 py-3 items-center checkcontainer" htmlFor="interarticleselect"><input type="checkbox" className="px-1 py-1 rounded checkbox-style"  id="interarticleselect"  onChange={this.selectall.bind(this)} /><span className="checkmark">&emsp;Select All</span></label>
                                                    {this.props.values.map((values, index)=>{
                                                        return(
                                                            <label className="flex flex-row px-2 py-3 items-center checkcontainer">
                                                                <input type="checkbox" className="px-1 py-1 rounded checkbox-style interarticleselect" id={index+1} value={values.value} onChange={this.updatestate} /><span className="checkmark">&emsp;{values.value}</span>
                                                            </label>
                                                        )
                                                    })}
                                            </div>
                                            <button type="button" className="w-full py-2 rounded-lg px-3 text-sm items-center text-white font-bold apply-filter-btn" id="interarticletags" onClick={this.displaytags}>Apply</button>
                                        </div>
                                        <h4 className="hidden tagresponsive py-0.5" id="interarticlevalues"></h4>
                                    </div>
                                    <h3 className="hidden pt-3 font-medium font-family text-zinc-400 text-xs filterallinter" id="inter-chan">AND</h3>
                                    <div className="hidden flex flex-col shadow-md rounded-xl filterallinter filterresponsive" id="inter-channel">
                                        <h3 className="text-left  md:text-sm lg:text-base font-family py-1.5">Channel &nbsp; <span className="lg:text-sm md:text-xs font-light">is</span></h3>
                                        <div className="py-1.5" id="125"><button type="button" className="w-full rounded-lg md:text-xs lg:text-sm font-light px-3 py-3 focus:text-current text-left search-filter-box" id="interchanneltagsupdate" onClick={this.tagvalues.bind(this)}>Search Value</button></div>                                        
                                        <div id="tagmenu9" className="hidden px-3 py-2 flex flex-col bg-white shadow-2xl rounded-xl tagvaluescroll" ref={this.slider}>
                                            <div className="flex flex-col px-1 py-2 tagvalues">
                                                    <div className="px-2 py-3"><input type="search" placeholder="Search filter" className="w-full rounded-lg text-xs font-medium px-3 py-3 focus:ring-0" /></div>
                                                    <label className="flex flex-row px-2 py-3 items-center checkcontainer" htmlFor="interchannelselect"><input type="checkbox" className="px-1 py-1 rounded checkbox-style"  id="interchannelselect"  onChange={this.selectall.bind(this)} /><span className="checkmark">&emsp;Select All</span></label>
                                                    {this.props.values.map((values, index)=>{
                                                        return(
                                                            <label className="flex flex-row px-2 py-3 items-center checkcontainer">
                                                                <input type="checkbox" className="px-1 py-1 rounded checkbox-style interchannelselect" id={index+1} value={values.value} onChange={this.updatestate} /><span className="checkmark">&emsp;{values.value}</span>
                                                            </label>
                                                        )
                                                    })}
                                            </div>
                                            <button type="button" className="w-full py-2 rounded-lg px-3 text-sm items-center text-white font-bold apply-filter-btn" id="interchanneltags" onClick={this.displaytags}>Apply</button>
                                        </div>
                                        <h4 className="hidden tagresponsive py-0.5" id="interchannelvalues"></h4>
                                    </div>
                                </div>
                            </React.Fragment>
                        </div>
                    </div>
                    <div className="save-view-box flex-shrink-0">
                        <button type="button">
                            <FontAwesomeIcon icon={faFloppyDisk}/>&nbsp;
                            <span className="font-medium lg:font-small">Save views</span>
                        </button>
                        <div className="px-2 py-2 closesildebar">
                            <img src="./images/collapse.gif" alt="collapse" onClick={this.closesidebar} className="gif"/>
                        </div>
                    </div>
                </div>
                <div className="inner-box2">
                    <button type="button" ><label onClick={this.showsidebar}><img src="./images/settings.gif" className="gif"/>Filters</label></button>
                    <div className="row1">
                        <div className="row1-box1">
                            <h3>AI-1</h3>
                        </div>
                        <div className="row1-box2">
                            <h3>AI-2</h3>
                        </div>
                    </div>
                    <div className="row2">
                        <div className="row2-box1">
                            <h3>Hotjar</h3>
                        </div>
                        <div className="row2-box2"> 
                            <h3>Gousto</h3>
                        </div>
                        <div className="row2-box3">
                            <div className="row2-box3-1">
                                <h3>hopin</h3>
                            </div>
                            <div className="row2-box3-2">
                                <h3>Nestle</h3>
                            </div>
                        </div>
                        <div className="row2-box4">
                            <h3>Sharad Khandelwal</h3>
                        </div>
                    </div>
                    <div className="contents-outer-box">
                            <div className="content-box">
                                <img src="./images/content1.png" alt="content1"/>
                            </div>
                            <div className="content-box">
                                <img src="./images/content2.png" alt="content2"/>
                            </div>
                            <div className="content-box">
                                <img src="./images/content3.png" alt="content3"/>
                            </div>
                            <div className="content-box">
                                <img src="./images/content4.png" alt="content4"/>
                            </div>
                            <div className="content-box">
                                <img src="./images/content5.png" alt="content5"/>
                            </div>
                            <div className="content-box">
                                <img src="./images/content6.png" alt="content6"/>
                            </div>
                            <div className="content-box">
                                <img src="./images/content7.png" alt="content7"/>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const filtertags = state.filterTags
    const values = state.values
    return {
        filtertags,
        values
    }
}
 
export default connect(mapStateToProps)(Body1);
