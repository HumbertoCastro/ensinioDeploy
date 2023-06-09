import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

const pt = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMTZDMTIuNDE4MyAxNiAxNiAxMi40MTgzIDE2IDhDMTYgMy41ODE3MiAxMi40MTgzIDAgOCAwQzMuNTgxNzIgMCAwIDMuNTgxNzIgMCA4QzAgMTIuNDE4MyAzLjU4MTcyIDE2IDggMTZaIiBmaWxsPSIjNkRBNTQ0Ii8+CjxwYXRoIGQ9Ik03Ljk5OTk4IDMuMTMwMzdMMTQuNjA4NyA3Ljk5OTkzTDcuOTk5OTggMTIuODY5NUwxLjM5MTMgNy45OTk5M0w3Ljk5OTk4IDMuMTMwMzdaIiBmaWxsPSIjRkZEQTQ0Ii8+CjxwYXRoIGQ9Ik04IDEwLjc4MjVDOS41MzY3OSAxMC43ODI1IDEwLjc4MjYgOS41MzY2NiAxMC43ODI2IDcuOTk5ODhDMTAuNzgyNiA2LjQ2MzA5IDkuNTM2NzkgNS4yMTcyOSA4IDUuMjE3MjlDNi40NjMyMiA1LjIxNzI5IDUuMjE3NDEgNi40NjMwOSA1LjIxNzQxIDcuOTk5ODhDNS4yMTc0MSA5LjUzNjY2IDYuNDYzMjIgMTAuNzgyNSA4IDEwLjc4MjVaIiBmaWxsPSIjRjBGMEYwIi8+CjxwYXRoIGQ9Ik02LjYwODc2IDcuODI2MTdDNi4xMjQ4OCA3LjgyNjE3IDUuNjU3OTIgNy44OTk3NyA1LjIxODM1IDguMDM2MzNDNS4yMzc4MiA5LjU1NjMzIDYuNDc1NDUgMTAuNzgyNyA4LjAwMDA3IDEwLjc4MjdDOC45NDI4MiAxMC43ODI3IDkuNzc1NDUgMTAuMzEzNCAxMC4yNzg4IDkuNTk2MkM5LjQxNzYzIDguNTE4MTcgOC4wOTI2IDcuODI2MTcgNi42MDg3NiA3LjgyNjE3WiIgZmlsbD0iIzAwNTJCNCIvPgo8cGF0aCBkPSJNMTAuNzMxMSA4LjUzM0MxMC43NjQ2IDguMzYwMzggMTAuNzgyNyA4LjE4MjI5IDEwLjc4MjcgNy45OTk4OEMxMC43ODI3IDYuNDYzMDcgOS41MzY4NyA1LjIxNzI5IDguMDAwMDkgNS4yMTcyOUM2Ljg1MzQgNS4yMTcyOSA1Ljg2OTAyIDUuOTExMDcgNS40NDMwMiA2LjkwMTYzQzUuODE5NTkgNi44MjM2IDYuMjA5NDYgNi43ODI1IDYuNjA4OCA2Ljc4MjVDOC4yMjQ5NiA2Ljc4MjQ3IDkuNjg3MDIgNy40NTQyOSAxMC43MzExIDguNTMzWiIgZmlsbD0iIzAwNTJCNCIvPgo8L3N2Zz4K";
const en = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMTZDMTIuNDE4MyAxNiAxNiAxMi40MTgzIDE2IDhDMTYgMy41ODE3MiAxMi40MTgzIDAgOCAwQzMuNTgxNzIgMCAwIDMuNTgxNzIgMCA4QzAgMTIuNDE4MyAzLjU4MTcyIDE2IDggMTZaIiBmaWxsPSIjRjBGMEYwIi8+CjxwYXRoIGQ9Ik03LjY1MjIgOC4wMDAwNEgxNkMxNiA3LjI3Nzk4IDE1LjkwMzggNi41Nzg0OSAxNS43MjQ0IDUuOTEzMDlINy42NTIyVjguMDAwMDRaIiBmaWxsPSIjRDgwMDI3Ii8+CjxwYXRoIGQ9Ik03LjY1MjIgMy44MjYyM0gxNC44MjU4QzE0LjMzNjEgMy4wMjcxIDEzLjcwOTkgMi4zMjA3NiAxMi45Nzk5IDEuNzM5MjZINy42NTIyVjMuODI2MjNaIiBmaWxsPSIjRDgwMDI3Ii8+CjxwYXRoIGQ9Ik04LjAwMDAzIDE2LjAwMDRDOS44ODI4MSAxNi4wMDA0IDExLjYxMzMgMTUuMzQ5NiAxMi45Nzk5IDE0LjI2MTJIMy4wMjAxNUM0LjM4NjcxIDE1LjM0OTYgNi4xMTcyNCAxNi4wMDA0IDguMDAwMDMgMTYuMDAwNFoiIGZpbGw9IiNEODAwMjciLz4KPHBhdGggZD0iTTEuMTc0MjMgMTIuMTczOUgxNC44MjU5QzE1LjIxOSAxMS41MzI0IDE1LjUyMzkgMTAuODMxMSAxNS43MjQ0IDEwLjA4NjlIMC4yNzU2MzVDMC40NzYxNjYgMTAuODMxMSAwLjc4MTA3MiAxMS41MzI0IDEuMTc0MjMgMTIuMTczOVoiIGZpbGw9IiNEODAwMjciLz4KPHBhdGggZD0iTTMuNzA1NzUgMS4yNDkzMUg0LjQzNDc4TDMuNzU2NjYgMS43NDE5N0w0LjAxNTY5IDIuNTM5MTJMMy4zMzc1OSAyLjA0NjQ3TDIuNjU5NSAyLjUzOTEyTDIuODgzMjUgMS44NTA0N0MyLjI4NjE5IDIuMzQ3ODEgMS43NjI4NyAyLjkzMDUgMS4zMzE2MiAzLjU3OTc1SDEuNTY1MjJMMS4xMzM1NiAzLjg5MzM0QzEuMDY2MzEgNC4wMDU1MyAxLjAwMTgxIDQuMTE5NSAwLjk0IDQuMjM1MTZMMS4xNDYxMiA0Ljg2OTU2TDAuNzYxNTYzIDQuNTkwMTZDMC42NjU5NjkgNC43OTI2OSAwLjU3ODUzMSA0Ljk5OTc4IDAuNDk5OTM4IDUuMjExMTlMMC43MjcwMzEgNS45MTAxOUgxLjU2NTIyTDAuODg3MDk0IDYuNDAyODRMMS4xNDYxMiA3LjJMMC40NjgwMzEgNi43MDczNEwwLjA2MTg0MzcgNy4wMDI0N0MwLjAyMTE4NzUgNy4zMjkyOCAwIDcuNjYyMTYgMCA4SDhDOCAzLjU4MTc1IDggMy4wNjA4NyA4IDBDNi40MTk2MyAwIDQuOTQ2NDEgMC40NTg0MzggMy43MDU3NSAxLjI0OTMxWk00LjAxNTY5IDcuMkwzLjMzNzU5IDYuNzA3MzRMMi42NTk1IDcuMkwyLjkxODUzIDYuNDAyODRMMi4yNDA0MSA1LjkxMDE5SDMuMDc4NTlMMy4zMzc1OSA1LjExMzAzTDMuNTk2NTkgNS45MTAxOUg0LjQzNDc4TDMuNzU2NjYgNi40MDI4NEw0LjAxNTY5IDcuMlpNMy43NTY2NiA0LjA3MjQxTDQuMDE1NjkgNC44Njk1NkwzLjMzNzU5IDQuMzc2OTFMMi42NTk1IDQuODY5NTZMMi45MTg1MyA0LjA3MjQxTDIuMjQwNDEgMy41Nzk3NUgzLjA3ODU5TDMuMzM3NTkgMi43ODI1OUwzLjU5NjU5IDMuNTc5NzVINC40MzQ3OEwzLjc1NjY2IDQuMDcyNDFaTTYuODg1MjUgNy4yTDYuMjA3MTYgNi43MDczNEw1LjUyOTA2IDcuMkw1Ljc4ODA5IDYuNDAyODRMNS4xMDk5NyA1LjkxMDE5SDUuOTQ4MTZMNi4yMDcxNiA1LjExMzAzTDYuNDY2MTYgNS45MTAxOUg3LjMwNDM0TDYuNjI2MjIgNi40MDI4NEw2Ljg4NTI1IDcuMlpNNi42MjYyMiA0LjA3MjQxTDYuODg1MjUgNC44Njk1Nkw2LjIwNzE2IDQuMzc2OTFMNS41MjkwNiA0Ljg2OTU2TDUuNzg4MDkgNC4wNzI0MUw1LjEwOTk3IDMuNTc5NzVINS45NDgxNkw2LjIwNzE2IDIuNzgyNTlMNi40NjYxNiAzLjU3OTc1SDcuMzA0MzRMNi42MjYyMiA0LjA3MjQxWk02LjYyNjIyIDEuNzQxOTdMNi44ODUyNSAyLjUzOTEyTDYuMjA3MTYgMi4wNDY0N0w1LjUyOTA2IDIuNTM5MTJMNS43ODgwOSAxLjc0MTk3TDUuMTA5OTcgMS4yNDkzMUg1Ljk0ODE2TDYuMjA3MTYgMC40NTIxNTZMNi40NjYxNiAxLjI0OTMxSDcuMzA0MzRMNi42MjYyMiAxLjc0MTk3WiIgZmlsbD0iIzAwNTJCNCIvPgo8L3N2Zz4K"
const es = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgOC4wMDAyM0MwIDguOTc4NzkgMC4xNzYwMzEgOS45MTYxNyAwLjQ5NzU5NCAxMC43ODI4TDggMTEuNDc4NUwxNS41MDI0IDEwLjc4MjhDMTUuODI0IDkuOTE2MTcgMTYgOC45Nzg3OSAxNiA4LjAwMDIzQzE2IDcuMDIxNjcgMTUuODI0IDYuMDg0MjkgMTUuNTAyNCA1LjIxNzYzTDggNC41MjE5N0wwLjQ5NzU5NCA1LjIxNzYzQzAuMTc2MDMxIDYuMDg0MjkgMCA3LjAyMTY3IDAgOC4wMDAyM1oiIGZpbGw9IiNGRkRBNDQiLz4KPHBhdGggZD0iTTE1LjUwMjQgNS4yMTc0MUMxNC4zNzIgMi4xNzEwMyAxMS40Mzk3IDAgNy45OTk5NiAwQzQuNTYwMjUgMCAxLjYyNzkgMi4xNzEwMyAwLjQ5NzU1OSA1LjIxNzQxSDE1LjUwMjRaIiBmaWxsPSIjRDgwMDI3Ii8+CjxwYXRoIGQ9Ik0wLjQ5NzU1OSAxMC43ODI3QzEuNjI3OSAxMy44MjkxIDQuNTYwMjUgMTYuMDAwMSA3Ljk5OTk2IDE2LjAwMDFDMTEuNDM5NyAxNi4wMDAxIDE0LjM3MiAxMy44MjkxIDE1LjUwMjQgMTAuNzgyN0gwLjQ5NzU1OVoiIGZpbGw9IiNEODAwMjciLz4KPC9zdmc+Cg=="

function HoverLenguage({ name }) {

  const selectedLenguage = localStorage.getItem('lenguage') ? localStorage.getItem('lenguage') : "pt";
  

  const changeTextLenguage = (lenguage) => {
    console.log(i18n);
    i18n.changeLanguage(lenguage);
    localStorage.setItem('lenguage', lenguage);
  }

  return (
    <div className="dropdown move-down">
      <button className="dropbtn" data-testid="drop-btn">{ selectedLenguage }</button>
      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.848 6.6432C5.45633 7.26987 4.54367 7.26987 4.152 6.6432L0.956249 1.53C0.539968 0.86395 1.01881 1.68514e-07 1.80425 2.37179e-07L8.19575 7.95942e-07C8.98119 8.64607e-07 9.46003 0.863952 9.04375 1.53L5.848 6.6432Z" fill="#99F3F5"/>
      </svg>
      <div className="dropdown-content lenguage-content">
        <button
          className={
            selectedLenguage === "pt" ? "selected btn" : "btn"
          }
          data-testid="lenguage-btn"
          onClick={ () => {
          changeTextLenguage("pt")
        } }>
          <img className="country-icon" src={ pt } alt="pt" />
          Pt
        </button>
        <button
          className={
            selectedLenguage === "en" ? "selected btn" : "btn"
          }
          data-testid="lenguage-btn"
          onClick={ () => {
          changeTextLenguage("en")
        } }>
          <img className="country-icon" src={ en } alt="en" />
          En
        </button>
        <button
          className={
            selectedLenguage === "es" ? "selected btn" : "btn"
          }
          data-testid="lenguage-btn"
          onClick={ () => {
          changeTextLenguage("es")
        } }>
          <img className="country-icon" src={ es } alt="es" />
          Es
        </button>
      </div>
    </div>
  );
}

export default HoverLenguage;

HoverLenguage.propTypes = {
};
