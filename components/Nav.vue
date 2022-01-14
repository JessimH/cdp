<template>
    <div class="navigation">
        <NuxtLink class="navigation_link" to="/">
            <img class="navigation_logo" src="~/assets/images/logo.png" />      
        </NuxtLink>
        <ul>
            <li>
                <NuxtLink v-if="this.$route.path == '/'" class="navigation_link_current" to="/">
                    <b-icon-house-fill class="navigation_icon"></b-icon-house-fill>
                    Accueil
                </NuxtLink>
                <NuxtLink v-else class="navigation_link" to="/">
                    <b-icon-house class="navigation_icon"></b-icon-house>
                    Accueil
                </NuxtLink>
            </li>
            <li>
                <NuxtLink v-if="this.$route.path == '/profile/jessim'" class="navigation_link_current" to="/">
                    <b-icon-person-fill class="navigation_icon"></b-icon-person-fill>
                    Profil
                </NuxtLink>
                <NuxtLink v-else class="navigation_link" to="/profile/jessim">
                    <b-icon-person class="navigation_icon"></b-icon-person>
                    Profil
                </NuxtLink>
            </li>
            <li>
                <NuxtLink v-if="this.$route.path == '/parametres'" class="navigation_link_current" to="/">
                    <b-icon-gear-fill class="navigation_icon"></b-icon-gear-fill>
                    Parametres
                </NuxtLink>
                <NuxtLink v-else class="navigation_link" to="/parametres">
                    <b-icon-gear class="navigation_icon"></b-icon-gear>
                   Parametres
                </NuxtLink>
            </li>
            <li>
                <NuxtLink v-if="this.$route.path == '/mentions'" class="navigation_link_current" to="/">
                    <b-icon-question-circle-fill class="navigation_icon"></b-icon-question-circle-fill>
                    Mentions légales
                </NuxtLink>
                <NuxtLink v-else class="navigation_link" to="/mentions">
                    <b-icon-question-circle class="navigation_icon"></b-icon-question-circle>
                    Mentions légales
                </NuxtLink>
            </li>
        </ul>

        <button class="nav_btn_disconnect">Deconnexion</button>
    </div>
</template>

<script>
import {
  BIcon,
  BIconSearch,
  BIconHouseFill,
  BIconHouse,
  BIconQuestionCircle,
  BIconQuestionCircleFill,
  BIconBell,
  BIconBellFill,
  BIconPerson,
  BIconPersonFill,
  BIconGearFill,
  BIconGear,
} from 'bootstrap-vue'

export default {
  components: {
    BIcon,
    BIconSearch,
    BIconHouse,
    BIconHouseFill,
    BIconBell,
    BIconBellFill,
    BIconQuestionCircle,
    BIconQuestionCircleFill,
    BIconPerson,
    BIconPersonFill,
    BIconGearFill,
    BIconGear,
  },
}
</script>

<style>
.navigation{
    position: relative;
    height: 100%;
    padding-top: 15px;
    padding-left: 100px;
    padding-right: 40px;
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.navigation ul{
    list-style: none;
    margin: 0px;
}
.navigation ul li{
    margin-top: 24px;
    display: flex;
    align-items: center;
    width: fit-content;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    padding: 8px 15px;
    border-radius: 50px;
}
.navigation ul li:hover{
    background-color: rgba(255, 255, 255, 0.145);
}
.navigation_logo{
    max-width: 200px;
    max-height: 50px;
    padding-left: 10px;
}
.nav_btn{
    margin-top: 24px;
    width: 100%;
    padding: 15px 10px;
    border-radius: 50px;
    background-color: #00DC81;
    border: none;
    color: white;
    font-weight: 700;
    cursor: pointer;
    transition: 0.2s ease-in-out;
}
.nav_btn_disconnect{
    position: absolute;
    bottom: 30px;
    max-width: 215px;
    margin-top: 24px;
    width: 100%;
    padding: 15px 10px;
    border-radius: 50px;
    background-color: transparent;
    border: 1px solid white;
    color: white;
    font-weight: 700;
    cursor: pointer;
    transition: 0.2s ease-in-out;
}
.nav_btn_disconnect:hover{
    background-color: transparent;
    color: red;
    border: 1px solid red;
}
.nav_btn:hover{
    transform: scale(1.03);
    background-color: #00DC81;
}
.navigation_icon {
  margin-right: 15px;
  font-size: 25px;
  font-weight: bold;
}
.navigation_link {
  text-decoration: none;
  color: white;
  margin-bottom: 0;
  font-size: 17px;
  font-weight: 700;
}
.navigation_link:hover {
  text-decoration: none;
  color: white;
}
.navigation_link_current{
    text-decoration: none;
    color: white;
    margin-bottom: 0;
    font-size: 17px;
    font-weight: 500;
    font-weight: 800;
}
.navigation_link_current:hover {
  text-decoration: none;
  color: white;
}
</style>
