<template>
    <div class="row dash-cont">
        <div class="col-sm-2"></div>
        <div class="col-sm-8">
            <div class="persona-info">
                <div class="row">
                    <div class="col">
                        <p class="persona-helper">Persona Information</p>
                        <p class="persona-title">Robert Humphrey</p>
                        <p class="persona-switch">Feeling dizzy? <a href="/">Switch Persona!</a></p>
                    </div>
                    <div class="col">
                        <p class="role-helper">Job Information</p>
                        <p class="job-title">Founder & CEO</p>
                        <p class="company-name">ColdFusion Cybersecurity</p>
                    </div>
                    <div class="col">
                        <p class="role-helper">Financial Information</p>
                        <p class="balance">Bank: $5,000,000</p>
                        <p class="weekly-bills">Weekly Bills: $2,500</p>
                    </div>
                </div>
            </div>

            <div class="row" style="margin-bottom: 1vh;">
                <div class="col">
                    <div class="utility">
                        <p class="utility-helper">Vehicle Utilities</p>
                        <p class="utility-title">Department of Motor Vehicles</p>
                        <div class="utility-block">
                            <p class="utility-block-text">Register & Modify Vehicles</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="utility">
                        <p class="utility-helper">Weapon Utilities</p>
                        <p class="utility-title">Bureau of Firearms</p>
                        <div class="utility-block">
                            <p class="utility-block-text">Register & Modify Weapons</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <div class="utility">
                        <p class="utility-helper">Job Utilities</p>
                        <p class="utility-title">Employment Center</p>
                        <div class="utility-block">
                            <p class="utility-block-text">Apply for & View Jobs</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="utility">
                        <p class="utility-helper">Banking Utilities</p>
                        <p class="utility-title">Financial Accounts</p>
                        <div class="utility-block">
                            <p class="utility-block-text">Create & View Financials</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-2"></div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        computed: {
            ...mapState('auth', ['loggedIn', 'user'])
        },
        name: 'Dashboard',
        middleware: 'civilian'
    }
</script>

<style>
    body {
        margin: 0;
    }

    .text-center {
        text-align: center;
    }

    .dash-cont {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .site-name {
        font-family: 'Exo', sans-serif;
        font-size: 10vw;
    }

    .dept-button {
        width: 90%;
        margin-bottom: 0.5vh;
    }

    .persona-info {
        width: 100%;
        height: 13vh;
        background-color: #FFFFFF;
        margin-bottom: 2vh;
        box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.4);
    }

    .persona-helper {
        position: absolute;
        top: 1vh;
        left: 2vw;
        color: #969696;
    }

    .persona-title {
        position: absolute;
        top: 3.5vh;
        left: 2vw;
        font-style: normal;
        font-weight: bold;
        font-size: 2vh;
    }

    .persona-switch {
        position: absolute;
        top: 6.5vh;
        left: 2vw;
        color: #969696;
    }

    .role-helper {
        position: absolute;
        top: 1vh;
        color: #969696;
    }

    .job-title {
        position: absolute;
        top: 3.5vh;
        font-style: normal;
        font-weight: bold;
        font-size: 2vh;
    }

    .company-name {
        position: absolute;
        top: 6.5vh;
        color: #969696;
    }
    
    .balance {
        position: absolute;
        top: 3.5vh;
        font-style: normal;
        font-weight: bold;
        font-size: 2vh;
        color: green;
    }
    
    .weekly-bills {
        position: absolute;
        top: 6.5vh;
        font-style: normal;
        font-weight: bold;
        font-size: 2vh;
        color: red;
    }

    .utility {
        width: 100%;
        height: 12.5vh;
        background-color: #FFFFFF;
        margin-bottom: 2vh;
        box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.4);
    }

    .utility-helper {
        position: absolute;
        top: 1vh;
        left: 2vw;
        color: #969696;
    }

    .utility-title {
        position: absolute;
        top: 3.5vh;
        left: 2vw;
        font-style: normal;
        font-weight: bold;
        font-size: 2vh;
    }

    .utility-block {
        position: absolute;
        background-color: #111111;
        top: 7vh;
        left: 2vw;
        width: 20vw;
        height: 4vh;
    }

    .utility-block-text {
        color: #FFFFFF;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 1vh;
        font-weight: bold;
    }
</style>