<h1 align="center">Roboflow를 활용한 차량 파손 감지 웹 프로젝트 </h1>

## 목차

  - [개요](https://github.com/ehdgml123/socar#-개요)

  - [팀원 소개](https://github.com/ehdgml123/socar#-팀원소개)
  
  - [기술 스택](https://github.com/ehdgml123/socar#-기술스택)
    
  - [프로젝트 설계](https://github.com/ehdgml123/socar#-프로젝트)
    
  - [주요기능 실행화면](https://github.com/ehdgml123/socar#-주요기능-실행화면)
    
  - [개선사항](https://github.com/ehdgml123/socar#-개선사항)

## :page_with_curl: 개요
- 프로젝트 목표 : Roboflow 를 활용하여 차량 파손감지 하는 프로젝트  
- 개발 기간 : 25/03/31 ~ 25/04/25

## 🙋‍♀️ 팀원소개
- LEE DON GHEE <a href="https://github.com/ehdgml123"><img src="https://img.shields.io/badge/GitHub-181717?style=plastic&logo=GitHub&logoColor=white"></a>
- Nae Ho Seung <a href="https://github.com/Naessss"><img src="https://img.shields.io/badge/GitHub-181717?style=plastic&logo=GitHub&logoColor=white"></a>

 #### :pencil:기술스택
- Frontend : `JS`, `CSS`, `React.js`, `Bootstrap`,`react-router-dom`, `react-dom`
- Backend : `FastAPI`
- AI Model : `MySQL`
- IDE : `Visual Studio Code (VSCode)`
- Source Code Management : `Git`

 ## 프로젝트 📂 PPT 📂

 <details><summary>PPT</summary> <div align="center">
  
  | ![Image](https://github.com/user-attachments/assets/e4c7188d-873a-45bc-a800-1fc93b94f2fb) | ![Image](https://github.com/user-attachments/assets/1c218af2-06f0-4014-9dfc-d0f5965070be) |
  | :----------: | :----------: |
  | ![Image](https://github.com/user-attachments/assets/835f7db6-0a92-4f77-ba91-5d6d6b200b18) | ![Image](https://github.com/user-attachments/assets/5c0ec3ba-55f1-4463-92c6-545ff0d05b33) |
  | ![Image](https://github.com/user-attachments/assets/9dc285ad-f962-4883-9385-c183e554929b) | ![Image](https://github.com/user-attachments/assets/0b4dad0d-9d9e-4c2f-81bb-47734aa92620) |
  | ![Image](https://github.com/user-attachments/assets/2ac861c0-3945-4391-893f-34342394e495) | ![Image](https://github.com/user-attachments/assets/fddfa276-f48d-487f-8b46-79e4b2a6fc8e) |
  | ![Image](https://github.com/user-attachments/assets/990d0980-cd8f-4764-b37b-c67594eb8e92) | ![Image](https://github.com/user-attachments/assets/5e3838fb-24f7-4059-b916-ce1ff366567e) |
  | ![Image](https://github.com/user-attachments/assets/16e09aff-4700-4426-ae73-4b6eb72e72e5) | ![Image](https://github.com/user-attachments/assets/00250fec-afd1-4214-8cb7-ba65df28a88c) |
  | ![Image](https://github.com/user-attachments/assets/3c26b9b7-31db-4686-b027-5786a67750bb) | ![Image](https://github.com/user-attachments/assets/972af0b6-22ea-4b9e-a12e-c2b835672ea2) |
  | ![Image](https://github.com/user-attachments/assets/5eb84d7d-c9fb-42f7-bc02-1f2a7ba37df7) | ![Image](https://github.com/user-attachments/assets/7fd8b3ad-4cc0-426e-a2c9-149ddf8ea949) |
  | ![Image](https://github.com/user-attachments/assets/863dfb95-7c6d-48e2-a153-58c4571e3781) | ![Image](https://github.com/user-attachments/assets/d5f11426-9633-4ecd-b7b3-f8d3b06f98c8) |
  | ![Image](https://github.com/user-attachments/assets/a0491ded-a840-4504-8597-39af0fbc7f97) | ![Image](https://github.com/user-attachments/assets/1bc726eb-079d-411e-9adc-5b0db2c22a78) |
  | ![Image](https://github.com/user-attachments/assets/4f286877-03b8-4038-ab0b-381328599aee) | ![Image](https://github.com/user-attachments/assets/444e5d8a-1e1c-4d83-8f5c-9233e7a6ecce) |
  | ![Image](https://github.com/user-attachments/assets/0073d6ad-8a21-41d4-b64a-19c1c684031f) | ![Image](https://github.com/user-attachments/assets/2d6ab1e1-d552-46c7-bf30-61d4df40a65b) |
  | ![Image](https://github.com/user-attachments/assets/cbe76bb7-92a8-4f5b-8c20-4f3feb78c7ac) | ![Image](https://github.com/user-attachments/assets/aa11beff-16ae-4509-aad1-cde8321ae417) |
  | ![Image](https://github.com/user-attachments/assets/7c15512f-6fb6-4148-ba0e-08e350bd7587) |
  </details>
  </div>

## :bulb: 주요기능 실행화면
 
 * **차량 파손 감지 **
 - 사용자가 차량 외부를 촬영한 이미지를 업로드하면, 시스템이 파손된 부위를 자동으로 감지하여 시각적으로 표시해주는 기능을 제공한다.

 ![Image](https://github.com/user-attachments/assets/9a542eb0-de90-4633-a877-1a2c9e3eeff6)


 * **파손조회 내역 및 상세보기**
 - 사용자가 조회한 내역 을 볼 수 있으며, 상세보기를 하면 파손된 부위 감지된 이미지를 볼 수가 있다.

 ![Image](https://github.com/user-attachments/assets/1a44d1b2-116e-4a10-9ed9-4f993fb98f59)


## 개선사항
 - 현재는 단순한 파손 유무만 판별하지만 **파손 유형** 추가 하고 싶다
 - 밤이나 우천 등 열악한 환경에서 이미지 품질 저하로 감지 성능이 낮아질 수 있음. 다양한 **조도와 날씨 조건을 반영한 데이터셋 보강**이 필요할거 같다.
