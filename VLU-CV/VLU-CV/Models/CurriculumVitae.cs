using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace VLU_CV.Models
{
    public class CurriculumVitae
    {
        [Key]
        public int Id { get; set; }

        public string UserId { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập họ tên", AllowEmptyStrings = false)]
        [StringLength(50)]
        public string FullName { get; set; }
        [Required(ErrorMessage = "Vui lòng nhập vị trí ứng tuyển", AllowEmptyStrings = false)]
        public string Position { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập Personal statement", AllowEmptyStrings = false)]
        public string PersonalStatement { get; set; }

        public DateTime BirthDay { get; set; }
        public DateTime CreatedAt { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập địa chỉ Email", AllowEmptyStrings = false)]
        public string Email { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập số điện thoại", AllowEmptyStrings = false)]
        [
            RegularExpression(
                @"^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$",
                ErrorMessage = "Số điện thoại không đúng định dạng"
            ),
            StringLength(10, MinimumLength = 10, ErrorMessage = "Số điện thoại phải có 10 số")
        ]
        public string PhoneNumber { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập địa chỉ facebook", AllowEmptyStrings = false)]
        public string FacebookUrl { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập địa chỉ hiện tại", AllowEmptyStrings = false)]
        public string Address { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập lĩnh vực kĩ năng thứ nhất", AllowEmptyStrings = false)]
        public string Skill_1 { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập mô tả kĩ năng ở lĩnh vực kĩ năng thứ 1", AllowEmptyStrings = false)]
        public string SkillDecription_1 { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập lĩnh vực kĩ năng thứ hai", AllowEmptyStrings = false)]
        public string Skill_2 { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập mô tả kĩ năng ở lĩnh vực kĩ năng thứ 2", AllowEmptyStrings = false)]
        public string SkillDecription_2 { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập chuyên ngành", AllowEmptyStrings = false)]
        public string Specialized { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập trường học", AllowEmptyStrings = false)]
        public string SchoolName { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập điểm tốt nghiệp", AllowEmptyStrings = false)]
        public double GPA { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập vị trí làm việc thứ nhất", AllowEmptyStrings = false)]
        public string Positioned_1 { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập tên công ty thứ nhất", AllowEmptyStrings = false)]
        public string Worked_1 { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập mô tả cho công việc thứ nhất", AllowEmptyStrings = false)]
        public string Description_1 { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập vị trí làm việc thứ hai", AllowEmptyStrings = false)]
        public string Positioned_2 { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập tên công ty thứ hai", AllowEmptyStrings = false)]
        public string Worked_2 { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập mô tả cho công việc thứ hai", AllowEmptyStrings = false)]
        public string Description_2 { get; set; }

        //[Required(ErrorMessage = "Vui lòng nhập thành tích", AllowEmptyStrings = true)]
        public string Achievement { get; set; }

        [Required(ErrorMessage = "Vui lòng upload ảnh đại diện", AllowEmptyStrings = false)]
        public string ImageSrc { get; set; }
    }

    public class DashBoard
    {
        public int Id { get; set; }
        public int Count { get; set; }
        //public string Month { get; set; }
        public string Day { get; set; }
    }
}
