//eventos del formulario personal info.

const btn_personal_info = document.getElementById('btn-personal-info');
const input_name = document.getElementById('input-name');
const input_email = document.getElementById('input-email');
const input_number = document.getElementById('input-number');
const err_name = document.querySelector('.err-name');
const err_email = document.querySelector('.err-email');
const err_email_test = document.querySelector('.err-email-test');
const err_number = document.querySelector('.err-number');
const exprReg = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
const info_personal = document.querySelector('.info-personal');
const select_plan = document.querySelector('.select-plan');
const circle_one = document.querySelector('.circle-one');
const circle_two = document.querySelector('.circle-two')
const circle_three = document.querySelector('.circle-three');
const circle_four = document.querySelector('.circle-four')


let price_pick_online_mo = 1;
let price_pick_larger_mo = 2;
let price_pick_custom_mo = 3;

let price_pick_online_yr = 10;
let price_pick_larger_yr = 20;
let price_pick_custom_yr = 30;



input_name.focus();

//validacion de correo electronico

input_email.addEventListener('keyup',(e)=>{
    e.preventDefault();

    input_email.value ? err_email.style.display = "none" : err_email.style.display = "flex";

    if(exprReg.test(input_email.value)){
        err_email_test.style.display = "none"
        input_email.className = "email-ok";
        err_email.style.display = "none"

    }else{
        input_email.className = "email-invalid";

        if(input_email.value === ''){
            err_email.innerText = "Field is required"
        }else{
            
        }
    }

})


input_name.addEventListener('keyup',(e)=>{
    e.preventDefault()
    input_name.value ? err_name.style.display = "none" : err_name.style.display = "flex";
})

input_number.addEventListener('keyup',(e)=>{
    e.preventDefault()
    input_number.value ? err_number.style.display = "none" : err_number.style.display = "flex";
})




//eventos del boton next desde personal info
btn_personal_info.addEventListener('click',(e)=>{
    e.preventDefault();
    
   if(input_name.value === '' && input_email.value === '' && input_number.value === ''){
    
    err_name.style.display = "flex"
    err_email.style.display = "flex"
    err_number.style.display = "flex"
    
    
    
    
   }else if(input_name.value === ''){
     err_name.style.display = "flex"

   }else if(input_email.value === ''){   
     err_email.style.display = "flex"
    

   }else if(input_number.value === ''){
    err_number.style.display = "flex"
    

   }else{
    info_personal.style.display = "none"
    select_plan.style.display = "flex"

    circle_one.classList.remove("circle-active");
    circle_two.classList.add("circle-active");
   

   }

})


//eventos de select-plan
//eventos del swicth en seleccionar el plan

const checkBox = document.getElementById('switch');
const plan_arcade = document.querySelector('.yearly_arcade')
const plan_advanced = document.querySelector('.yearly_advanced')
const plan_pro = document.querySelector('.yearly_pro')
const text_switch_month = document.querySelector('.text-switch-month');
const text_switch_year = document.querySelector('.text-switch-year')
const per_arcade = document.getElementById('per-arcade');
const per_advance = document.getElementById('per-advanced');
const per_pro = document.getElementById('per-pro');
const plan_select = document.getElementById('plan-select');
const check_online = document.querySelector('.check-online');
const check_larger = document.querySelector('.check-larger');
const check_custom = document.querySelector('.check-custom');
const check_price_online = document.querySelector('.check-price-online');
const check_price_larger = document.querySelector('.check-price-larger');
const check_price_custom = document.querySelector('.check-price-custom');
const price_arcade = document.getElementById('price-arcade');
const price_advanced = document.getElementById('price-advanced');
const price_pro = document.getElementById('price-pro');
const text_plan_selected = document.getElementById('text-plan-select')
const box_one = document.querySelector('.box-one');
const box_two = document.querySelector('.box-two');
const box_three = document.querySelector('.box-three');
const selection_plan = document.getElementById('selection-plan');
const btn_next_plan = document.querySelector('.btn-next-plan');

// eventos del switch desde select plan
checkBox.addEventListener('click',()=>{
  
    plan_select.innerText = event.target.checked ? '' : ''
    plan_arcade.style.display = event.target.checked ? "block" : "none";
    plan_advanced.style.display = event.target.checked ? "block" : "none";
    plan_pro.style.display = event.target.checked ? "block" : "none";

    per_arcade.innerText = event.target.checked ? "/yr" : "/mo"
    per_advance.innerText = event.target.checked ? "/yr" : "/mo"
    per_pro.innerText = event.target.checked ? "/yr" : "/mo"

    price_arcade.innerText = event.target.checked ? price_pick_online_yr : price_pick_online_mo;
    price_advanced.innerText = event.target.checked ? price_pick_larger_yr : price_pick_larger_mo;
    price_pro.innerText = event.target.checked ? price_pick_custom_yr : price_pick_custom_mo;

    
    text_switch_month.style.color = event.target.checked ? "hsl(231, 11%, 63%)" : "";
    text_switch_year.style.color = event.target.checked ? "hsl(213, 96%, 18%)" : "";

    check_online.value = event.target.checked ? price_pick_online_yr : price_pick_online_mo;
    check_larger.value = event.target.checked ? price_pick_larger_yr : price_pick_larger_mo;
    check_custom.value = event.target.checked ? price_pick_custom_yr : price_pick_custom_mo;

    check_price_online.innerText = event.target.checked ? price_pick_online_yr : price_pick_online_mo;
    check_price_larger.innerText = event.target.checked ? price_pick_larger_yr : price_pick_larger_mo;
    check_price_custom.innerText = event.target.checked ? price_pick_custom_yr : price_pick_custom_mo;

    text_plan_selected.checked = event.target.checked ? text_plan_selected.innerText = '' : text_plan_selected.innerText = '';
    
    checkBox.checked ? selection_plan.style.display = "flex":selection_plan.style.display = "flex";
    checkBox.checked ? btn_select_plan.classList.remove('btn-next-ok') & btn_select_plan.classList.add('btn-next') : btn_select_plan.classList.remove('btn-next-ok') & btn_select_plan.classList.add('btn-next');
})



//eventos para selecionar el tipo de plan en select-plan
const btn_select_plan = document.getElementById('btn-select-plan');
const box_select = document.querySelectorAll('.box');
const price = document.querySelectorAll('.price'); 
const period = document.querySelectorAll('.period');
const tipo_plan = document.querySelectorAll('.tipo_plan');
const check_period_online = document.querySelector('.check-period-online');
const check_period_larger = document.querySelector('.check-period-larger');
const check_period_custom = document.querySelector('.check-period-custom');
const plan_selected = document.getElementById('plan-selected');
const year_selected = document.getElementById('year-selected');
const month_selected_online = document.getElementById('month-selected-online');
const month_selected_larger = document.getElementById('month-selected-larger');
const month_selected_custom = document.getElementById('month-selected-custom');
const total_selected_plan = document.getElementById('total-selected-plan');
const period_selected_plan = document.getElementById('period-selected-plan');
const period_pay = document.getElementById('period-pay');
const cost_total_period = document.getElementById('cost-total-period');


box_select.forEach((btn_select_plan,i,a) =>{
        
    btn_select_plan.onclick = ()=>{
        
            let price_div = price[i].innerText;
            let period_div = period[i].innerText;
            let tipoPlan_div = tipo_plan[i].innerText;

            text_plan_selected.innerText = "Tu plan es : "
            plan_select.innerText =tipoPlan_div;

            //pasa el dato de  periodo al paso 3 add-ond
            check_period_online.innerText = ` / ${period_div}`
            check_period_larger.innerText = ` / ${period_div}`
            check_period_custom.innerText = ` / ${period_div}`

            plan_selected.innerText = tipoPlan_div
            
            period_div === '/mo' ? year_selected.innerText = `(Montly)` :year_selected.innerText = `(Yearly)`;                
            
            month_selected_online.innerText = period_div;
            month_selected_larger.innerText = period_div;
            month_selected_custom.innerText = period_div;

            total_selected_plan.innerHTML = price_div;
            period_selected_plan.innerText = period_div;

            
            period_div === '/mo' ? period_pay.innerText = `(Per Monthly)`: period_pay.innerText = `(Per Yearly)`;
            
            cost_total_period.innerText = period_div;

            tipoPlan_div === 'Arcade' ? box_one.classList.add('plan-arcade') : box_one.classList.remove('plan-arcade');
            tipoPlan_div === 'Advanced' ? box_two.classList.add('plan-advanced') : box_two.classList.remove('plan-advanced');
            tipoPlan_div === 'Pro' ? box_three.classList.add('plan-pro') : box_three.classList.remove('plan-pro');

            selection_plan.style.display = "none"
            btn_next_plan.classList.remove('btn-next')
            btn_next_plan.classList.add('btn-next-ok');

            

        
        }

        
        
})


//eventos del boton next en select plan
btn_go_back_select = document.getElementById('btn-go-back-select');
const page_picks_add = document.querySelector('.picks-add');


//eventos de go back ( volver a la pagina anterior)
btn_go_back_select.addEventListener('click',()=>{
    select_plan.style.display = "none";
    info_personal.style.display = "flex";

    circle_two.classList.remove("circle-active");
    circle_one.classList.add("circle-active");
    
})



//eventos del boton next ( siguiente pagina) desde select-plan

btn_select_plan.addEventListener('click',()=>{
    
    if(plan_select.innerText === ''){
        selection_plan.innerText = "Debes seleccionar un plan!!...."
        
      
    }else {
        
        select_plan.style.display = "none";
        page_picks_add.style.display = "flex"
    
        circle_two.classList.remove("circle-active");
        circle_three.classList.add("circle-active");
    }
    
    
    
})


//eventos de pagina 3 add-ons

//eventos de go back
const btn_go_back_pick = document.getElementById('btn-go-back-pick');
const picks_add = document.querySelector('.picks-add')

btn_go_back_pick.addEventListener('click',()=>{
    picks_add.style.display = "none";
    select_plan.style.display = "flex";

    circle_three.classList.remove("circle-active");
    circle_two.classList.add("circle-active");

   

    
    
})


//capturar datos de los check
const check_online_checked = document.getElementById('check-online');
const check_larger_checked = document.getElementById('check-larger');
const check_custom_checked = document.getElementById('check-custom');
const btn_add_ons = document.getElementById('btn-add-ons');
const page_finish_up = document.querySelector('.finish-up');
const selected_pick_online = document.getElementById('selected-pick-online');
const seleted_pick_larger = document.getElementById('selected-pick-large');
const selected_pick_custom = document.getElementById('selected-pick-custom');
const price_selected_online = document.getElementById('price-selected-online');
const price_selected_larger = document.getElementById('price-selected-larger');
const price_selected_custom = document.getElementById('price-selected-custom');
const cost_total_pay = document.getElementById('cost-total-pay');

const box_check_online = document.querySelector('.box-check-online');
const box_check_larger = document.querySelector('.box-check-larger');
const box_check_custom = document.querySelector('.box-check-custom');
const box_check = document.querySelectorAll('.box-check');
const value_checkbox = document.querySelectorAll('.value-checkbox');

box_check.forEach((btn_add_ons,i,a)=>{
    btn_add_ons.onclick = ()=>{


        if(i === 0){
            if(!check_online_checked.checked){
                check_online_checked.checked = true
                box_check_online.classList.add('online-service')
            }else{
                check_online_checked.checked = false
                box_check_online.classList.remove('online-service')
            }
        }
        if(i === 1){
            if(!check_larger_checked.checked){
                check_larger_checked.checked = true
                box_check_larger.classList.add('larger-storage')
                
            }else{
                check_larger_checked.checked = false
                box_check_larger.classList.remove('larger-storage')
            }
        }
        if(i === 2){
            if(!check_custom_checked.checked){
                check_custom_checked.checked = true
                box_check_custom.classList.add('customizable-profile')
            }else{
                check_custom_checked.checked = false
                box_check_custom.classList.remove('customizable-profile')
            }
        }
        
        
    }
})


//capturar el check al presionar el boton next step
btn_add_ons.addEventListener('click',()=>{
                
    check_online_checked.checked  ? selected_pick_online.innerText = check_online_checked.name : selected_pick_online.innerText = ''; 
    check_larger_checked.checked  ? seleted_pick_larger.innerText =  check_larger_checked.name : seleted_pick_larger.innerText = '';
    check_custom_checked.checked  ? selected_pick_custom.innerText =  check_custom_checked.name: selected_pick_custom.innerText = '';

    check_online_checked.checked  ? price_selected_online.innerText =  ` + $ ${check_online_checked.value}` : price_selected_online.innerText = '';
    check_larger_checked.checked  ? price_selected_larger.innerText =  ` + $ ${check_larger_checked.value}` : price_selected_larger.innerText = '';
    check_custom_checked.checked  ? price_selected_custom.innerText =  ` + $ ${check_custom_checked.value}`: price_selected_custom.innerText = '';  
    
   
    check_online_checked.checked ? month_selected_online.style.display = 'flex' : month_selected_online.style.display = 'none';
    check_larger_checked.checked ? month_selected_larger.style.display = 'flex' : month_selected_larger.style.display = 'none';
    check_custom_checked.checked ? month_selected_custom.style.display = 'flex' : month_selected_custom.style.display = 'none';
    
    check_online_checked.checked ? box_check_online.classList.add('online-service') : box_check_online.classList.remove('online-service')
    check_larger_checked.checked ? box_check_larger.classList.add('larger-storage') : box_check_larger.classList.remove('larger-storage')
    check_custom_checked.checked ? box_check_custom.classList.add('customizable-profile') : box_check_custom.classList.remove('customizable-profile')

    if(check_online_checked.checked && check_larger_checked.checked && check_custom_checked.checked){
        cost_total_pay.innerHTML = '$' + ' ' + (parseFloat(check_online_checked.value) + parseFloat(check_larger_checked.value) + parseFloat(check_custom_checked.value) + parseFloat(total_selected_plan.innerText))
    }

    else if(check_online_checked.checked && check_larger_checked.checked){
        cost_total_pay.innerHTML = '$' + ' ' + (parseFloat(check_online_checked.value) + parseFloat(check_larger_checked.value) + parseFloat(total_selected_plan.innerText))
    }
    
    else if(check_larger_checked.checked && check_custom_checked.checked){
        cost_total_pay.innerHTML = '$' + ' ' + (parseFloat(check_larger_checked.value) + parseFloat(check_custom_checked.value) + parseFloat(total_selected_plan.innerText))
    }
    else if(check_online_checked.checked && check_custom_checked.checked){
        cost_total_pay.innerHTML = '$' + ' ' + (parseFloat(check_online_checked.value) + parseFloat(check_custom_checked.value) + parseFloat(total_selected_plan.innerText))
    }
    
    else if(check_online_checked.checked){
        cost_total_pay.innerHTML = '$' + ' ' +  (parseFloat(check_online_checked.value) + parseFloat(total_selected_plan.innerText))
        
    }
    else if(check_larger_checked.checked){
        cost_total_pay.innerHTML = '$' + ' ' +  (parseFloat(check_larger_checked.value) + parseFloat(total_selected_plan.innerText))
        
    }
    else if(check_custom_checked.checked){
        cost_total_pay.innerHTML = '$' + ' ' +  (parseFloat(check_custom_checked.value) + parseFloat(total_selected_plan.innerText))
        
    }

    
    else{
        cost_total_pay.innerHTML = '$' + total_selected_plan.innerText
    }
    
        
    

        picks_add.style.display = "none";
        page_finish_up.style.display = "flex";

        circle_three.classList.remove("circle-active");
        circle_four.classList.add("circle-active");
        
            
            


})


//eventos de go back desde finish
const btn_go_back_finish = document.getElementById('btn-go-back-finish');

btn_go_back_finish.addEventListener('click',()=>{
    
        page_finish_up.style.display = "none";
        picks_add.style.display = "flex";

        circle_three.classList.add("circle-active");
        circle_four.classList.remove("circle-active");

       
       
})

const btn_finish = document.getElementById('btn-finish');
const thank_you = document.querySelector('.thank-you');

btn_finish.addEventListener('click',()=>{
        
        page_finish_up.style.display = "none";
        thank_you.style.display = "flex";

        circle_four.classList.remove("circle-active");
})


//boton de volver al home

const icon_home = document.getElementById('icon-home');
const form_info_personal = document.querySelector('.form-info-personal')

icon_home.addEventListener('click',()=>{
        
        info_personal.style.display = "flex";
        thank_you.style.display = "none";

        circle_one.classList.add("circle-active");
        
        location.reload()

})


//evento de change en finishup

const change = document.getElementById('change');
change.addEventListener('click',()=>{
    
    select_plan.style.display = "flex";
    page_finish_up.style.display = "none";

    circle_two.classList.add("circle-active");
    circle_four.classList.remove("circle-active");

})


