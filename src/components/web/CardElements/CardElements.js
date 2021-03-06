import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardContainer = styled.div`
   .card-list {
      width: 100%;
      max-width: 400px;
   }

   img {
      width: 100%;
      height: 200px;
      display: block;
   }

   .container-gradient {
      background: linear-gradient(to right, #111a, #111a);
      border-radius: 1.5rem;
      margin: 0;
      padding: 2px;
      position: relative;

      transition: border 0.1s ease-out;

      &:hover {
         background: linear-gradient(to right, #020323, #151a77) border-box;
         transform: translatey(-4px);
         -webkit-box-shadow: 0px 0px 16px 0px #222;
         -moz-box-shadow: 0px 0px 16px 0px #222;
         box-shadow: 0px 0px 16px 0px #222;
      }
   }

   .card {
      background-color: #000;
      color: #fafafa;
      border-radius: 15px;
      overflow: hidden;
      padding: 1.25rem;
      position: relative;
      border: 1px solid transparent;
   }

   .card-image {
      border-radius: 10px;
      overflow: hidden;
   }

   .card-header {
      margin-top: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      p {
         font-weight: 600;
         font-size: 1.375rem;
         line-height: 1.25;
         padding-right: 1rem;
         text-decoration: none;
         color: inherit;
         will-change: transform;

         &:after {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
         }
      }
   }

   .container-icon {
      border: 0;
      background-color: transparent;
      padding: 0px;
      height: 25px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height: 1;
      transition: 0.15s ease;
   }

   .card-footer {
      margin-top: 1.25rem;
      border-top: 1px solid #ccca;
      padding-top: 1.25rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-wrap: wrap;
   }

   .card-meta {
      display: flex;
      align-items: center;
      color: #ccc;

      &_views {
         font-size: 1.2rem;
         margin-bottom: 0.5rem;
      }

      &_date {
         color: #ccca;
         font-size: 1.2rem;
      }

      &:first-child:after {
         display: block;
         content: '';
         width: 4px;
         height: 4px;
         border-radius: 50%;
         margin-left: 0.75rem;
         margin-right: 0.75rem;
      }
   }
`;

export const CardButtonLink = styled(Link)`
   width: 3rem;
   height: 3rem;
   margin-left: 0.5rem;
   white-space: nowrap;
   padding: 2.5rem;
   color: #fafafa;
   font-size: 13px;
   outline: none;
   border: none;
   display: flex;
   justify-content: center;
   align-items: center;
   text-decoration: none;
   transition: color 0.5s ease-in-out;
   background: in;

   &:hover {
      color: #ccca;
   }
`;
