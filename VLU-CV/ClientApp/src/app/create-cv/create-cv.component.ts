import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { Observable, Subscriber } from 'rxjs';
import { CreateCv, ErrorList } from 'src/shared/createcv.model';
import { CreateCvService } from 'src/shared/createcv.service';
@Component({
	selector: 'app-create-cv',
	templateUrl: './create-cv.component.html',
	styleUrls: ['./create-cv.component.css']
})
export class CreateCvComponent implements OnInit {
	user: SocialUser | null;
	constructor(public service: CreateCvService, private authService: SocialAuthService) {
		this.user = null;
		this.authService.authState.subscribe((user: SocialUser) => {
			this.user = user;
		});
	}
	ngOnInit(): void {

	}
	imgSrc: string;
	isImg = false;
	errorList: ErrorList;

	onSubmit(form: NgForm): void {
		this.service.formData.userId = this.user.id;
		this.service.postCV(this.service.formData).subscribe(res => {
			alert('CV created successfully.');
			form.reset();
			this.isImg = false;
			this.imgSrc = null;
			this.service.formData = new CreateCv();
			this.service.refreshCVList();
		},
			err => {
				this.errorList = err.error.errors;
				console.log(err);
				if (err.status == 422) {
					alert('Please fill all the required fields.\n' + this.errorList.map(x => x.message).join('\n'));
				}
				else if (err.error.statusCode === 423) {
					alert('You can create just 6 cv in day');
				}
			}
		);
	}
	uploadImage(event: Event) {
		const file = (event.target as HTMLInputElement).files[0];
		this.isImg = true;
		this.convertImageToBase64(file);
	}
	convertImageToBase64(file: File) {
		const obervable = new Observable((sub: Subscriber<any>) => {
			this.readFile(file, sub);
		});
		obervable.subscribe((d) => {
			this.imgSrc = d;
			this.service.formData.imageSrc = d;
		})
	}
	readFile(file: File, sub: Subscriber<any>) {
		const fileReader = new FileReader();
		fileReader.readAsDataURL(file);
		fileReader.onload = () => {
			sub.next(fileReader.result);
			sub.complete();
		}
		fileReader.onerror = (error) => {
			sub.error(error);
			sub.complete();
		}
  }

  cvtips({
    tips = "GỢI Ý",
    name = "",
    message = "",
    duration = 3000
      
  }) {
    const main = document.getElementById('cv-tips-right');

    if (main) {
      const cvtips = document.createElement('div');


      //Auto remove cvtips
      const autoRemoveId = setTimeout(function () {
        main.removeChild(cvtips);
      }, duration + 1000);

      //cvtips.onclick = function (e) {
      //  if (e.target.closest('.cvtips__close')) {
      //    main.removeChild(cvtips);
      //    clearTimeout(autoRemoveId);
      //  }
      //}

      cvtips.classList.add('cv-tips-right');
      cvtips.innerHTML = `
      <div class="tips-sidebar" style="display: inline-block;
                                       align-items: center;
                                       background-color: #fff;
                                       border-radius: 2px;
                                       padding: 20px 0px;
                                       max-width: 340px;
                                       min-width: 340px;
                                       box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
                                       
                                       animation: slideInLeft ease .3s, fadeOut linear 1s 10s forwards;
                                       transition: all linear .3s;">
		     <div class="tips__item" style="width: 120px;
                                        display: flex;
                                        font-size: 20px;
                                        background: linear-gradient(270deg, rgba(49, 200, 36, 0.8) 10.53%, rgba(24, 27, 92, 0.8) 70.18%);
                                        font-weight: 600;
                                        color: #fff;
                                        line-height: 37px;
                                        ">

			     <img class="icon__item" src="../../assets/Image/suggest.png" style="width: 37px; height: 37px;"/>
			     <div class="label__item" style="padding-left: 10px;">
				     ${tips}
			     </div>
		     </div>
		     <div class="names-input__item" style="margin-left: 10px;
                                               margin-right: 10px;
                                               padding-bottom: 10px;
                                               font-weight: 700;
                                               font-size: 20px;
                                               color: darkred;
                                               border-bottom: 2px solid;">
			     ${name}
		     </div>
		     <div class="content__item" style="padding-top: 10px;
                                           margin-left: 10px;
                                           margin-right: 10px;
                                           text-align: justify;">
			     ${message}
		     </div>
	    </div>
      `;
      main.appendChild(cvtips);
    }
  }

  cvtips2({
    tips = "GỢI Ý",
    name = "",
    message = "",
    duration = 3000

  }) {
    const main = document.getElementById('cv-tips-left');

    if (main) {
      const cvtips2 = document.createElement('div');


      //Auto remove cvtips
      const autoRemoveId = setTimeout(function () {
        main.removeChild(cvtips2);
      }, duration + 1000);

      //cvtips.onclick = function (e) {
      //  if (e.target.closest('.cvtips__close')) {
      //    main.removeChild(cvtips);
      //    clearTimeout(autoRemoveId);
      //  }
      //}

      cvtips2.classList.add('cv-tips-left');
      cvtips2.innerHTML = `
      <div class="tips-sidebar" style="display: inline-block;
                                       align-items: center;
                                       background-color: #fff;
                                       border-radius: 2px;
                                       padding: 20px 0px;
                                       max-width: 340px;
                                       min-width: 340px;
                                       box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
                                       
                                       animation: slideInLeft ease .3s, fadeOut linear 1s 10s forwards;
                                       transition: all linear .3s;">
		     <div class="tips__item" style="width: 120px;
                                        display: flex;
                                        font-size: 20px;
                                        background: linear-gradient(270deg, rgba(49, 200, 36, 0.8) 10.53%, rgba(24, 27, 92, 0.8) 70.18%);
                                        font-weight: 600;
                                        color: #fff;
                                        line-height: 37px;
                                        ">

			     <img class="icon__item" src="../../assets/Image/suggest.png" style="width: 37px; height: 37px;"/>
			     <div class="label__item" style="padding-left: 10px;">
				     ${tips}
			     </div>
		     </div>
		     <div class="names-input__item" style="margin-left: 10px;
                                               margin-right: 10px;
                                               padding-bottom: 10px;
                                               font-weight: 700;
                                               font-size: 20px;
                                               color: darkred;
                                               border-bottom: 2px solid;">
			     ${name}
		     </div>
		     <div class="content__item" style="padding-top: 10px;
                                           margin-left: 10px;
                                           margin-right: 10px;
                                           text-align: justify;">
			     ${message}
		     </div>
	    </div>
      `;
      main.appendChild(cvtips2);
    }
  }

  showSuggestFullname() {
    this.cvtips({
      tips: 'GỢI Ý',
      name: 'Họ và Tên',
      message: '- Cần Nhập Họ và tên đầy đủ theo chứng minh thư. Nếu là CV tiếng Việt thì bạn Nhập có dấu, nếu là CV tiếng Anh thì bạn Nhập không dấu',
      duration: 10000
    })
  }
  showSuggestPosition() {
    this.cvtips({
      tips: 'GỢI Ý',
      name: 'Vị trí ứng tuyển',
      message: '- Nhập vị trí mà bạn đang muốn ứng tuyển',
      duration: 10000
    })
  }

  showSuggestPersonalStatement() {
    this.cvtips({
      tips: 'GỢI Ý',
      name: 'Mục tiêu nghề nghiệp',
      message: '- Để tạo ấn tượng cho nhà tuyển dụng, bạn nên chia thành mục tiêu ngắn hạn và dài hạn, nhập mục tiêu cụ thể theo vị trí mà bạn ứng tuyển, tránh nhập mục tiêu chung chung, không logic',
      duration: 10000
    })
  }

  showSuggestContactInfo() {
    this.cvtips2({
      tips: 'GỢI Ý',
      name: 'Thông tin liên hệ',
      message: '- Cần nhập đúng ngày sinh theo chứng minh thư<br>- Nhập địa chỉ email hay dùng của bạn và lưu ý là có thể đăng nhập được để nhà tuyển dụng có thể liên hệ với bạn khi có nhu cầu<br>- Nhập đúng số điện thoại chính của bạn để nhà tuyển dụng dễ dàng liên hệ với bạn<br>- Nếu có Facebook thì bạn gửi đường link trang web của bạn hoặc gửi trang Facebook cá nhân. Nếu không có thì để trống<br>- Có thể nhập địa chỉ tạm trú của bạn (Nơi bạn đang sinh sống)',
      duration: 10000
    })
  }

  showSuggestSkill() {
    this.cvtips2({
      tips: 'GỢI Ý',
      name: 'Kỹ năng',
      message: '- Nhập tên kỹ năng mà bạn có, nên nhập kỹ năng liên quan tới vị trí ứng tuyển<br> - Nếu bạn có nhiều kỹ năng thì bạn nhấn nút Thêm màu xanh để thêm nhiều kỹ năng khác',
      duration: 10000
    })
  }

  showSuggestAchievement() {
    this.cvtips2({
      tips: 'GỢI Ý',
      name: 'Thành tích',
      message: '- Nhập tên các thành tích mà bạn đạt được (Các chứng chỉ đạt được)<br>',
      duration: 10000
    })
  }

  showSuggestEducation() {
    this.cvtips({
      tips: 'GỢI Ý',
      name: 'Trình độ học vấn',
      message: '- Nhập tên trường Đại học, Cao đẳng, mà bạn đã từng học<br>- Nhập khoa, ngành học mà bạn học<br>- Điểm trung bình tổng kết khi ra trường hoặc thời điểm hiện tại',
      duration: 10000
    })
  }

  showSuggestWorkExp() {
    this.cvtips({
      tips: 'GỢI Ý',
      name: 'Kinh nghiệm làm việc',
      message: '- Nhập tên công ty mà bạn đã làm việc<br>- Nhập vị trí, chức danh mà bạn làm ở công ty đó<br>- Mô tả chi tiết các công việc mà bạn làm ở trong công ty, nêu thành tích mà bạn đạt được ở công ty (nếu có)',
      duration: 10000
    })
  }
}
