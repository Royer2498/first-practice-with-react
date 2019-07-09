import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import BasicForm from './basicForm';

describe('<BasicForm />',()=>{
    var basicForm;

    beforeEach(() => {
        basicForm = mount(<BasicForm/>);
    });
    
    it('The component render correctly',()=>{
        expect(basicForm.exists()).toBe(true);
    });

    it('The input name render correctly',()=>{
        expect(basicForm.find('.basic-form__name-input').exists()).toBeTruthy();   
    });

    it('The input race render correctly',()=>{
        expect(basicForm.find('.basic-form__race-input').exists()).toBeTruthy();        
    });

    it('The input horn render correctly',()=>{
        expect(basicForm.find('.basic-form__horn-input').exists()).toBeTruthy();   
    });

    it('The input colour render correctly',()=>{
        expect(basicForm.find('.basic-form__colour-input').exists()).toBeTruthy();         
    });

    it('The input category render correctly',()=>{
        expect(basicForm.find('.basic-form__category-input').exists()).toBeTruthy();          
    });

    it('The input typing render correctly',()=>{
        expect(basicForm.find('.basic-form__typing-input').exists()).toBeTruthy();           
    });

    it('The saving button render correctly',()=>{
        expect(basicForm.find('.basic-form__save-button').exists()).toBeTruthy();           
    });
});