<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="NumericSequenceCalculator_Web_Interface._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">

    <div class="jumbotron">
        <h1>Numeric Sequence Calculator</h1>
        <p class="lead">This application is used to calculate numeric sequence series based on the user's entered number.
        </p>
        <p class="lead">This application has two functionality, the first one is to generate sample sequences based on the user selected sequence, to give the user an overview of sequences samples,

        </p>
        <p class="lead"> while the second functionlity is to show the user five different sequences: <br/>- Show all numbers<br/>- Show all Odd numbers<br/>- Show all Even numbers
            <br/>- Show all numbers(C means Multiple by 3, E means Multiple by 5, Z means Mutliply by both)<br/>- Show all Fibonacci numbers

        </p>
    </div>

    <div class="row">
        <div class="col-md-4 col-sm-4">
            <h4>Insert Number to generate sequence</h4>
            <div class="container row">
                <div class="col-md-6 col-sm-6">
                    <textarea class="container col-md-12 col-sm-12" id="txtNumber"></textarea>
                </div>
                <div class="col-md-6 col-sm-6">
                    <label id="lblwarning"></label>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-4">
            <h4>Select Required Sequence</h4>
            <div class="container row">
            <div class="col-md-6 col-sm-6" ng-controller="sequenceCtrl" ng-app="app">
                <select id="selectedSequence">
                    <option selected="selected" value="0">Select Sequence</option>
                    <option ng-repeat="sequence in sequenceInfo" value="{{sequence.id}}">{{sequence.name}}</option>
                </select>  
            </div>
                <div class="col-md-6 col-sm-6">
                    <textarea class="container col-md-12 col-sm-12" id="txtPatternNumber" placeholder="Pattern"></textarea>
                </div>
                <div class="row">
                    <div class="col-md-6 col-sm-6">
                    <label id="lblPatternWarning"></label>
                </div>
                </div>
                
            </div>
        </div>
        <div class="col-md-4 col-sm-4">
            <h4>Selected sequence Result</h4>
            <div class="row col-md-12 col-sm-12">
                 <textarea id="lblResult" class="col-md-12 col-sm-12"></textarea>
            </div>
        </div>
    </div>
    
    <div class="row">
        <div class="col-md-12 col-sm-12">
            <h4>Results</h4>
            <div class="row col-md-12 col-sm-12">
                All Numbers <textarea id="lblResultUp" class="col-md-12 col-sm-12"></textarea>
            </div>
            <div class="row col-md-12 col-sm-12">
                All Odd Numbers <textarea id="lblResultOdd" class="col-md-12 col-sm-12"></textarea>
            </div>
            <div class="row col-md-12 col-sm-12">
                All Even Numbers <textarea id="lblResultEven" class="col-md-12 col-sm-12"></textarea>
            </div>
            <div class="row col-md-12 col-sm-12">
                All Numbers (C means Multiple by 3, E means Multiple by 5, Z means Mutliply by both) <textarea id="lblResultSpecial" class="col-md-12 col-sm-12"></textarea>
            </div>
            <div class="row col-md-12 col-sm-12">
               All Fibonacci Numbers <textarea id="lblResultFibo" class="col-md-12 col-sm-12"></textarea>
            </div>
        </div>
    </div>
    <script src="Scripts/Default/component.js"></script>
    <script src="Scripts/Default/series.js"></script>
    <script src="Scripts/Default/Default.js"></script>
</asp:Content>
