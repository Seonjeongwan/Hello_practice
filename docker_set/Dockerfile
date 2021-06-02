
#어떤 이미지를 사용해서 빌드할 것인지를 정의  
#최신 LTS(장기 지원) 버전인 12을 사용
FROM node:12

MAINTAINER seon

# 앱 디렉터리 생성 server.js가 있는 위치
# 이미지 안에 애플리케이션 코드를 넣기 위해 디렉터리를 생성 , 애플리케이션의 작업 디렉터리가 됨
WORKDIR C:\Users\admin\Desktop\fmp
# 앱 의존성 설치
# 가능한 경우(npm@5+) package.json과 package-lock.json을 모두 복사하기 위해
# 와일드카드를 사용
COPY package*.json ./

RUN npm install
# 프로덕션을 위한 코드를 빌드하는 경우
# RUN npm ci --only=production

#Docker 이미지 안에 앱의 소스코드를 넣기 위해 COPY 지시어를 사용
COPY . .

#앱이 8080포트에 바인딩 되어 있으므로 EXPOSE 지시어를 사용해서 docker 데몬에 매핑
EXPOSE 8080

#런타임을 정의하는 CMD로 앱을 실행하는 중요 명령어를 정의
#여기서는 서버를 구동하도록 node server.js을 실행하는 기본 npm start을 사용
CMD [ "node", "server.js" ]